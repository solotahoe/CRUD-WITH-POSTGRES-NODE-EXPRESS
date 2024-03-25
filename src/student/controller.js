
const queries = require("./queries")
const pool = require('../../db')
const { error } = require("console")
const getStudents = (req, res)=>{
    pool.query(queries.getStudents, (error, results)=>{
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const getStudentsById = (req, res)=>{
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentById,[id], (error, results)=>{
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const addStudents = (req,res)=>{
  const {name, email, age, dob} = req.body;

  //check if email exidst
  pool.query(queries.checkEmailExists, [email],  (error, results)=>{
    if(error) throw error
    // console.log(results)
   if(results.rows.length){
      res.send("email already exists")  
      return
   }

   //add student to db
   pool.query(queries.addStudent,[name, email, age, dob], (error, results)=>{
    if(error) throw error
    // console.log(results)
    res.status(201).send("student created succeffully")
   })
})
}


const removeStudents = (req, res)=>{
   const id  = parseInt(req.params.id);
   pool.query(queries.getStudentById, [id], (error, results)=>{
    if(error) throw error
    const noResults = !results.rows.length;
    if(noResults){
        res.status(404).send('student does not exit in the database')
        return
        
    }

    //delete the student
    pool.query(queries.removeStudent, [id] ,(error, results)=>{
        if(error) throw error
        res.status(200).send("student removed successuflly")
    } )
     
   })
}

const updateStudents = (req, res)=>{
    const id  = parseInt(req.params.id);
    const {name} = req.body;
    pool.query(queries.getStudentById, [id], (error, results)=>{
    const noResults = !results.rows.length;
    if(noResults){
        res.status(404).send('student does not exit in the database')
    }
    pool.query(queries.updateStudent, [name, id], (error, results)=>{
        if(error) throw error
        res.status(200).send("student updated successully")
    })
    })
}
module.exports = {
    getStudents,
    getStudentsById,
    addStudents,
    removeStudents,
    updateStudents
}
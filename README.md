# My Presentation on ORM

## Introduction
This README file provides an overview of ORM and its importance in software development.

## What is ORM?
ORM stands for Object-Relational Mapping...

### Benefits of ORM
- Reduced development time
- Increased productivity
- Improved maintainability

## Popular ORM Frameworks
- Hibernate (Java)
- Entity Framework (.NET)
- SQLAlchemy (Python)

## How ORM Works
...

## Conclusion
...

## comand to start postgress
sudo -i -u postgres

## then 
psql
This command launches the PostgreSQL interactive terminal where you can execute SQL commands

## confirm your connections
\conninfo 


## see database that already exist  
\l

## create db 
CREATE DATABASE students;

## switch to your created database
\c students

## CREATE TABLE IN THE DATABASE

CREATE TABLE students(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    age INT,
    dob DATE);
## viewtable 
\dt

## insert studensts

INSERT INTO students (name, email, age,dob)
VALUES ('kababa', 'kaka@gmail.com', 45, '1897-02-02'),
('ann','aaana@gmai.com',34,'1985-05-05')










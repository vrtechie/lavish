// const db = require('../database');
import dbConfig from '../databaseConfig.js'
import mysql from 'mysql';

const db = mysql.createConnection(dbConfig); 

const get=()=>{
    return new Promise((resolve,reject) => {
        db.query('SELECT * from booking ', (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const getById=(id)=>{
    return new Promise((resolve,reject)=>{
        db.query('SELECT * from booking where booking_id = ?',id, (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const Post=(data)=>{
    return new Promise((resolve,reject)=>{
        db.query('INSERT INTO booking SET ? ',data, (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const deleteById=(id)=>{
    return new Promise((resolve,reject)=>{
        db.query('DELETE FROM booking WHERE booking_id = ?',id, (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const update=(data,id)=>{
    console.log(data);
    return new Promise((resolve,reject)=>{
        db.query('UPDATE customers SET ? WHERE customer_id = ?',[data,id], (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
export {get,getById,Post,deleteById,update} ;
   
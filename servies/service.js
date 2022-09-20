// const db = require('../database');
import dbConfig from '../databaseConfig.js'
import mysql from 'mysql';

const db = mysql.createConnection(dbConfig); 

const get=()=>{
    return new Promise((resolve,reject) => {
        db.query('SELECT * from service ', (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const getById=(id)=>{
    return new Promise((resolve,reject)=>{
        db.query('SELECT * from service where id = ?',id, (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const Post=(data)=>{
    return new Promise((resolve,reject)=>{
        db.query('INSERT INTO service SET ? ',data, (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const deleteById=(id)=>{
    return new Promise((resolve,reject)=>{
        db.query('DELETE FROM service WHERE id = ?',id, (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const update=(data,id)=>{
    console.log(data);
    return new Promise((resolve,reject)=>{
        db.query('UPDATE service SET ? WHERE id = ?',[data,id], (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
export {get,getById,Post,deleteById,update} ;
   
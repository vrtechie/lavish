// const db = require('../database');
import dbConfig from '../databaseConfig.js'
import mysql from 'mysql';

const db = mysql.createConnection(dbConfig); 

const get=()=>{
    return new Promise((resolve,reject) => {
        db.query('SELECT * from reviews ', (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const getById=(id)=>{
    return new Promise((resolve,reject)=>{
        db.query('SELECT * from reviews where review_id = ?',id, (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const Post=(data)=>{
    return new Promise((resolve,reject)=>{
        db.query('INSERT INTO reviews SET ? ',data, (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const deleteById=(id)=>{
    return new Promise((resolve,reject)=>{
        db.query('DELETE FROM reviews WHERE review_id = ?',id, (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
const update=(data,id)=>{
    console.log(data);
    return new Promise((resolve,reject)=>{
        db.query('UPDATE reviews SET ? WHERE review_id = ?',[data,id], (err, rows) => {
            if(err) reject(err);
            resolve(rows)
        });
    })
}
export {get,getById,Post,deleteById,update} ;
   

// const express = require("express");
import express from 'express';
const  router = express.Router();
import {get,getById,Post,deleteById,update} from '../servies/cutomers.js'
const categoryRoutes={
    fetchAll:"/",
    fetchById:"/:id"

}
router.get(categoryRoutes.fetchAll, async function (req, res, next) {
   const data= await get()
    res.send(data)
})
router.get(categoryRoutes.fetchById, async function (req, res, next) {
    let {id}=req.params
    const data= await getById(id)
     res.send(data)
 })
 router.post("/", async function (req, res, next) {
    const data= await Post(req.body)
     res.send(data)
 })
 router.delete(categoryRoutes.fetchById, async function (req, res, next) {
    let {id}=req.params
    const data= await deleteById(id)
     res.send(data)
 })
 router.put(categoryRoutes.fetchById, async function (req, res, next) {
    let {id}=req.params
    const data= await update(req.body,id)
     res.send(data)
 })
export default router;

// const express = require("express");
import express from 'express';
const  router = express.Router();
import {get,getById,Post,deleteById,update} from '../servies/customerlogs.js'
const customerlogsRoutes={
    fetchAll:"/",
    fetchById:"/:id"

}
router.get(customerlogsRoutes.fetchAll, async function (req, res, next) {
   const data= await get()
    res.send(data)
})
router.get(customerlogsRoutes.fetchById, async function (req, res, next) {
    let {id}=req.params
    const data= await getById(id)
     res.send(data)
 })
 router.post("/", async function (req, res, next) {
    const data= await Post(req.body)
     res.send(data)
 })
 router.delete(customerlogsRoutes.fetchById, async function (req, res, next) {
    let {id}=req.params
    const data= await deleteById(id)
     res.send(data)
 })
 router.put(customerlogsRoutes.fetchById, async function (req, res, next) {
    let {id}=req.params
    const data= await update(req.body,id)
     res.send(data)
 })
export default router;
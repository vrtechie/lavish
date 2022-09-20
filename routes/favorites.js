
// const express = require("express");
import express from 'express';
const  router = express.Router();
import {get,getById,Post,deleteById,update} from '../servies/favorites.js'
const favoritesRoutes={
    fetchAll:"/",
    fetchById:"/:id"

}
router.get(favoritesRoutes.fetchAll, async function (req, res, next) {
   const data= await get()
    res.send(data)
})
router.get(favoritesRoutes.fetchById, async function (req, res, next) {
    let {id}=req.params
    const data= await getById(id)
     res.send(data)
 })
 router.post("/", async function (req, res, next) {
    const data= await Post(req.body)
     res.send(data)
 })
 router.delete(favoritesRoutes.fetchById, async function (req, res, next) {
    let {id}=req.params
    const data= await deleteById(id)
     res.send(data)
 })
 router.put(favoritesRoutes.fetchById, async function (req, res, next) {
    let {id}=req.params
    const data= await update(req.body,id)
     res.send(data)
 })
export default router;
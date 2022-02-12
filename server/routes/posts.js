import express from "express";
const router=express.Router();
import {getPosts,createPost,updatePost} from "../controllers/posts.js"


router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/',getPosts);



export default router;
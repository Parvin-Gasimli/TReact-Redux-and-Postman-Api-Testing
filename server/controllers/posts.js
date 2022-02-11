import postMessages from "../models/postMessage.js"


export const getPosts= async(req,res)=>{
try{
const postMessage= await postMessages.find();
console.log(postMessage);
res.status(200).json(postMessage)
}
catch(err){
res.status(404).json({message:err.message})
}
}
export const createPost =async(req,res)=>{
    const post=req.body;
    const newPost=new postMessages(post)
try {
    newPost.save()
    res.status(201).json(newPost)
    
} catch (error) {
res.status(409).json({message:message.error})

}}
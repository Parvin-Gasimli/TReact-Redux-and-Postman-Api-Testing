import postMessages from "../models/postMessage.js"


export const getPosts= async(req,res)=>{
try{
const postMessage= await postMessages.find();
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



export const updatePost =async(req,res)=>{
    const {id:_id}=req.params;

    const post =req.body
    if(!mongoose.Type.ObjectId.isValid(_id))
    return res.status(404).json({message:message.error})

   const UpdatePost= postMessages.findByIdAndUpdate(_id,post,{new :true})
//    console.log(UpdatePost);
   res.json(UpdatePost)
}

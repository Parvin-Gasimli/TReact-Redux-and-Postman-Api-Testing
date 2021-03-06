import axios from"axios"
const url ='http://localhost:5000/posts'


export const fetchPosts=async ()=>{
    return await axios.get(url)
}
export const createPost= async(newPost)=>{
   await axios.post(url,newPost)
}


export const updatePost =async(id,updatePost)=>{
axios.patch(`${url}/${id}`,updatePost)

}

export const deletePost=async(id)=>{
    axios.delete(`${url}/${id}`)

}

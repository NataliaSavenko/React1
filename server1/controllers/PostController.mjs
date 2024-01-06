import Post from "../models/Post.mjs"

const all=async (req,res)=>{
    const posts=await Post.find({})
    res.json(posts);
}

const getById=async (req,res)=>{

    const id=req.params.id;
    try{

    
    const post=await Post.findById(id);
    res.json(post);
    }
    catch{
        res.staus(404).json(
            {
                result: error,
                messaage:'post not found'
    }
        )
}
}


const add=(req,res)=>{}
const update=(req,res)=>{}
const remove=(req,res)=>{}


export default{all,getById,add,update, remove}
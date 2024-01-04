import Comment from "../models/Comment.mjs"

const all=async (req,res)=>{
    const comments=await Comment.find({})
    res.json(comments);
}

const getById=async (req,res)=>{

    const id=req.params.id;
    try{

    
    const comment=await Comment.findById(id);
    res.json(comment);
    }
    catch{
        res.staus(404).json(
            {
                result: error,
                messaage:'Comment not found'
    }
        )
}
}




export default{all,getById}
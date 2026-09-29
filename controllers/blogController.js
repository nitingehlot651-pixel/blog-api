const Blog = require("../models/blogModel")

const getBlogs = async(req, res)=>{
    const blogs = await Blog.find()
    if(!blogs){
        res.status(404)
        throw new Error("Blog not found")
    }
    res.status(200).json(blogs)
}


const getBlog = async(req, res)=>{
    const blog = await Blog.findById(req.params.id)
    if(!blog){
        res.status(404)
        throw new Error("Blog not found")
    }
    res.status(200).json(blog)
}

const addBlog = async(req, res)=>{

    const {title, description , author, isPublished} = req.body
    if(!title || !description || !author|| !isPublished){
        res.status(400)
        throw new Error("please fill all details")
    }
    
    const blog = await Blog.create({
        title,
        description,
        author,
        isPublished
    })

    if(!blog){
        res.status(409)
        throw new Error("blog not create")
    }

    res.status(201).json(blog)
}

const updateBlog = async(req, res)=>{
    
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })

    if(!updateBlog){
        res.status(400)
        throw new Error("blog not updated")
    }

    res.status(200).json(updatedBlog)
}

const removeBlog = async(req, res)=>{
    await Blog.findByIdAndDelete(req.params.id)
    res.status(200).json({message : "blog removed"})
}
module.exports = {getBlogs, getBlog, addBlog, updateBlog, removeBlog}
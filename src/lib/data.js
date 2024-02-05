import {Post, User} from './models'

import {connectionDb} from './utils'

export const getPosts=async()=>{
  try{
  connectionDb()
  const posts=await Post.find()
 return posts
  }
  catch (error){
    console.log(error)
    throw new Error("Failed to fetch post!");
  }
};

export const getPost=async(slug)=>{
    try{
    connectionDb()
    const post=await Post.findOne({slug})
   return post
    }
    catch (error){
      console.log(error)
      throw new Error("Failed to fetch post!");
    }
  };

export const getUser=async(id)=>{
  try{
  connectionDb()
  const users=await User.findById(id)
 return users
  }
  catch (error){
    console.log(error)
    throw new Error("Failed to fetch users!");
  }
};

export const getUsers=async()=>{
    try{
    connectionDb()
    const users=await User.find()
   return users
    }
    catch (error){
      console.log(error)
      throw new Error("Failed to fetch users!");
    }
  };
  

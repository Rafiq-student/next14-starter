import { Post } from "./models"
import { connectToDb } from "./utils"

export const addPost=async(formData)=>{
    'use server'
    const title=formData.get("title")
    const desc=formData.get("desc")
    const slug=formData.get("slug")
    const userId=formData.get("userId")


console.log(title, desc, slug, userId)


try{
    connectToDb()
    const newPost= new Post({
        title,
        desc,
        slug,
        userId
    })

   await newPost.save()
   console.log('Save to db')

}catch(error){
    console.log("error")
}
}

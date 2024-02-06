 import Image from 'next/image'
import  styles from './singlePost.module.css'
import PostUser from '@/app/Components/postuser/PostUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';
 
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };
 const page = async({params}) => {
 const {slug}=params
 
 const post= await getPost()

//  const post= await getData(slug)
   return (
     <div className={styles.container}>
       <div className={styles.imgContainer}>
        <Image src={'/post.png'} alt='' fill className={styles.img}/>
       </div>
       <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
            <Image src={'/post.png'} className={styles.avatar} fill alt=''/>
            {post && (
            <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/>
            </Suspense>
            )}
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValue}>M_Rafiq</span>
            </div>
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Publish</span>
                <span className={styles.detailValue}>01/02/2024</span>
            </div>
        </div>
        <div className={styles.content}>
            {post?.body}
        </div>
       </div>
     </div>
   )
 }
 
 export default page
 
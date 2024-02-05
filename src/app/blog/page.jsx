'use client'
// import PostCard from "../Components/postCard/PostCard";
// import styles from "./blog.module.css";

// const getData=async()=>{
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   if(!response.ok){
//     throw new Error("Could not retrieve data");
//   }
//   return response.json();
// }
// const page = () => {
//   const posts=getData()
//   return (
//     <div className={styles.container}>
//       {posts.map((post) => (
//         <div className={styles.post} key={post.id}>
//           <PostCard post={post} />
//         </div>
//       ))}
      
//     </div>
//   );
// };

// export default page;


import React, { useState, useEffect } from 'react';
import PostCard from "../Components/postCard/PostCard";
import styles from "./blog.module.css";

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error("Could not retrieve data");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Page;

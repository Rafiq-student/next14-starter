
import PostCard from "../Components/postCard/PostCard";
import styles from "./blog.module.css";

const getData=async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!response.ok){
    throw new Error("Could not retrieve data");
  }
  return response.json();
}
const page = async() => {
  const posts=await getData()
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

export default page;



 import Image from 'next/image'
import  styles from './singlePost.module.css'
 
 const page = () => {
   return (
     <div className={styles.container}>
       <div className={styles.imgContainer}>
        <Image src={'/post.png'} alt='' fill className={styles.img}/>
       </div>
       <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
            <Image src={'/post.png'} className={styles.avatar} fill alt=''/>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam obcaecati, dolorem, cupiditate sapiente sed fuga, nisi eveniet facere quidem aspernatur sint neque distinctio exercitationem! Quasi aut nisi dicta iste in.
        </div>
       </div>
     </div>
   )
 }
 
 export default page
 
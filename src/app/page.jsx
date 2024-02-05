import Image from 'next/image';
import styles from './home.module.css'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative, thoughts</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusantium.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Read More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src={'/brands.png'} alt='brands' fill className={styles.branImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src={'/hero.gif'} alt='hero' fill className={styles.heroImg}/>
    </div>
    </div>
};

export default Home;
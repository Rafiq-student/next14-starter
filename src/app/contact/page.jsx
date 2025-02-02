import Image from 'next/image'
import styles from './contact.module.css'
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={'/contact.png'} alt='Contact' fill/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email'/>
          <input type="text" placeholder='Phone Number' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default page

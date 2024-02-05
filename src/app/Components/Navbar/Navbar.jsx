
import Link from "next/link"
import Links from "./links/Links"
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo}>Rafiq</Link>
      <div>
       <Links/>
      </div>
    </div>
  )
}

export default Navbar

'use client'
import { useState } from 'react';
import styles from './link.module.css'
import NavLinks from "./navLink/NavLinks";
import Image from 'next/image';
const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session=true;
  const isAdmin=true
const Links = () => {
  const[open, setOpen]= useState(false)
  return (
    <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link)=>(
        <NavLinks item={link} key={link.title}/>
      ))}
     {
      session ? (
        <>
         {isAdmin && <NavLinks item={{title:"Admin",path:"/admin"}}/>}
         <button className={styles.logout}>Logout</button>
        </>

      ):(
        <NavLinks item={{title:"Login",path:"/login"}}/>
      )
     }
    </div>
    <Image className={styles.menuButton} src={'/menu.png'} alt='menu' width={30} height={30}  onClick={()=>setOpen((prev)=>!prev)}/>
    {
      open && (
        <div className={styles.mobileLinks}>
          {links.map((link)=>(
            <NavLinks item={link} key={link.title}/>
         ))}
        </div>
      )}
    </div>
  )
}

export default Links

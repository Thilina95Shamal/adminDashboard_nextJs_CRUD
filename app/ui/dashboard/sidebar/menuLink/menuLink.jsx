"use client"
import Link from "next/link"
import styles from "./menuLink.module.css"
import { usePathname } from "next/navigation"

const MenuLink = ({item}) => {

  //to use this hook the component must be a client component (client side).:
  const pathName = usePathname()  
  return (
    <Link href={item.path} className={`${styles.component} ${pathName === item.path && styles.active}`}>
        {item.icon}    
        {item.title}
    </Link>
  )
}

export default MenuLink

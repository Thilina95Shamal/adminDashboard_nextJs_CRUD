import styles from "../../ui/dashboard/products/products.module.css"
import Search from "../../ui/dashboard/search/search"
import Pagination from "../../ui/dashboard/pagination/pagination"
import Link from "next/link"
import Image from "next/image"


const Products = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a User.."/>
                <Link href="/dashboard/products/add">
                    <button className={styles.addbutton}>Add Products</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created at</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                            <Image src="/avatar.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Iphone
                            </div>
                        </td>
                        <td>Smart iphone Model 10</td>
                        <td>5000</td>
                        <td>2023-07-03</td>
                        <td>Stock</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/products/test">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </div>
    )
}

export default Products
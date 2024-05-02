import styles from "../../ui/dashboard/users/user.module.css"
import Search from "../../ui/dashboard/search/search"
import Pagination from "../../ui/dashboard/pagination/pagination"
import Link from "next/link"
import Image from "next/image"
import { fetchUsers } from "../../lib/data"
import { deleteUser } from "../../lib/actions"

//this `searchParams` is a default do not change like parameters
const UsersPage = async({ searchParams }) => { 
    const q = searchParams?.q || "";  
    const page = searchParams?.page;

    //render data to user table
    const {count,users} = await fetchUsers(q,page);  
    
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a User.."/>
                <Link href="/dashboard/users/add">
                    <button className={styles.addbutton}>Add User</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created at</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=>(
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                <Image src={user.img ||"/avatar.jpg"} alt="" width={40} height={40} className={styles.userImage}/>
                                {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4,16)}</td>
                            <td>{user.isAdmin ? "Admin" : "Client"}</td>
                            <td>{user.isActive ? "Active" : "Inactive"}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user.id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                    <form action={deleteUser}>
                                        <input type="text" name="id" value={user.id} hidden/>
                                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count}/>
        </div>
    )
}

export default UsersPage
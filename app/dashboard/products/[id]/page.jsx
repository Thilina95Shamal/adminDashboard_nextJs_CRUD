import Image from 'next/image'
import styles from '../../../ui/dashboard/products/viewSingleProduct/viewSingleProduct.module.css'

const SingleProductPage = () => {
    return (
        <div className={styles.container} >
          <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/avatar.jpg" alt='' fill />
            </div>
            Shamal Perera
          </div>
          <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" placeholder='Samsung'/>
                    <label htmlFor="">Price</label>
                    <input type="number" name="price"/>
                    <label htmlFor="">Stock</label>
                    <input type="number" name="stock"/>
                    <label htmlFor="">Color</label>
                    <input type="text" name="color"/>
                    <label htmlFor="">Size</label>
                    <input type="text" name="size"/>
                    <label htmlFor="">Category</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value="IOS">IOS</option>
                        <option value="Andriod">Andriod</option>
                    </select>
                    <label htmlFor="">Description</label>
                    <textarea type="text" name="desc" rows="10"/>
                    <button>Update</button>
                </form>
            </div>
        </div>
      )
}

export default SingleProductPage

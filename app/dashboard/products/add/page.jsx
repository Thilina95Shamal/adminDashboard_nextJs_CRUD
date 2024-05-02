import styles from '../../../ui/dashboard/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='title' name='title' required/>
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="mouse">Mouse</option>
          <option value="keyborad">Keyborad</option>
        </select>
        <input type="number" placeholder="price" name="price"/>
        <input type="number" placeholder="stock" name="stock"/>
        <input type="text" placeholder="color" name="color"/>
        <input type="text" placeholder="size" name="size"/>
        <textarea name="desc" id="desc" rows="10" placeholder='Description'></textarea>
        <button type='submit'>Sumbit</button>
      </form>
    </div>
  )
}

export default AddProductPage

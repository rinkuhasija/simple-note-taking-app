import styles from './categoryNameChip.module.css'

function CategoryNameChip(props) {
  return (
    <div className={styles.category}>
        <div className={styles.leftAvatar}> <span>  {props.initials} </span> </div>
        <h3> {props.categoryName} </h3>
    </div>
  )
}

export default CategoryNameChip
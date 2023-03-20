import CategoryNameChip from '../CategoryNameChip/CategoryNameChip'
import Modal from '../Modal/Modal'
import styles from './leftSection.module.css'
import { useState } from 'react'

function LeftSection() {

    const [showModal, setShowModal] = useState(false)

    function handleClick() {
        setShowModal(true)
    }

    return (
        <div className={styles.leftSection}>
            <h1> Pocket Notes </h1>
            <button type='button' onClick={handleClick} className={styles.btn}> <span> +  Create Notes </span> </button>

            <div className={styles.categoryWrapper}>
                <CategoryNameChip initials='CN' categoryName='Cuvette Notes' />
                <CategoryNameChip initials='JS' categoryName='JavaScript' />
                <CategoryNameChip initials='JS' categoryName='JavaScript' />
            
            </div>
        </div>
    )
}

export default LeftSection
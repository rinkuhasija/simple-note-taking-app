import CategoryNameChip from '../CategoryNameChip/CategoryNameChip'
import styles from './rightSection.module.css'

function RightSection() {
    return (
        <div className={styles.rightSection}>
            <div className={styles.topDiv}>
            <CategoryNameChip initials='JS' categoryName='JavaScript' />
            </div> <br />

            <div className={styles.middleDiv}>

                <div className={styles.span}>   Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </div>
                    

            </div> <br />

            <div className={styles.lastDiv}>

                <form className={styles.formFlex} action="updates.jsp" id="usrform">
                    <textarea rows="9" cols="70" placeholder='Enter your text here...........' name="comment" form="usrform">
                    </textarea>

                    <div className={styles.img}>

                    </div>

                </form>



            </div>

        </div>
    )
}

export default RightSection
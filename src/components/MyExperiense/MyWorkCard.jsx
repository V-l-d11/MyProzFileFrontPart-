import CrardExample from "./CardExaple"
import styles from './MyExp.module.css'

const MyWork = () => {
    return (
        <div  className={styles.containerMyWork}>
            <CrardExample className={styles.item1} />
            <CrardExample  className={styles.item1}/>
            <CrardExample  className={styles.item1} />
        </div>
    )
}
export default MyWork
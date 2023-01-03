import styles from './MySkills.module.css'
import Slider from '@mui/material/Slider';
const MySkills = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.h}>SKILLS & SOFTWARE</h1>
               <hr className={styles.hr} />       
                 
               <div className={styles.container1}> 
                   <div>
                       <ul className={styles.ul}>
                           <li>HTML</li>
                           <li>HTML5</li>
                           <li>CSS</li>
                           <li>Bootstrap/grid/flex</li>
                           <li>Material UI</li>
                           <li>Java Script</li>
                           <li>React</li>
                           <li>Redux</li>
                           <li>React-Redux</li>
                           <li>Redux toolkit</li>
                           <li>Git</li>
                           <li>GitLab</li>
                           <li>Node.js / mongoose</li>
                       </ul>
                  </div>
               </div>
            <div>
               <p className={styles.parags1}>production@  Valislav Bertsel </p> 
            </div>
           </div>
    )
}
export default MySkills
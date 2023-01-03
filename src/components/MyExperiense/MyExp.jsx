import styles from './MyExp.module.css'
import MyWork from './MyWorkCard'


const MyExp = () => {
    return (

        <div className={styles.container}>
  
            <h1 className={styles.h}>Experience</h1>
            <hr className={styles.hr} />       
             
            <div className={styles.containerGrid}>
            
            <div>
            <p className={styles.parags}>The beginning of my journey was in the profession of a Web designer, I worked as a freelancer from 20.02.2019-10.08.2020. After that, I began to study programming , I had to start studying programming languages such as Python and c++</p>
            </div>

            <div>
             <p className={styles.parags}>After that, I began to get involved in Frontend, studied the basic requirements for this specialty. Such as JavaScript,React framework,Redux state manager,React-Redux, Redux toolkit,Node js, PostrgresSql</p>
            </div>

             <div>
             <p className={styles.parags}>The field of pat projects, got a job at a company located in Warsaw Redcode for remote work as an intern 20.02.2022 - 15.06.2022, was on the project and the tasks that I solved there, unfortunately, I can't say(</p>
                </div>
                
            </div>


            
            <div>

                <h1 className={styles.hell}>My Work</h1>
            <MyWork />

            </div>
            
            <p className={styles.parags1}>production@  Valislav Bertsel </p> 
            
            
           
        </div>
    )
}
export default MyExp
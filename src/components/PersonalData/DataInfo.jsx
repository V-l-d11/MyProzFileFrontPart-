import styles from './PersonalData.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import Box from '@mui/material/Box'

const DataInfo = () => {
    return (
        <div className={styles.container2}>
            <h1 className={styles.h}>PERSONAL DATA</h1>
            <hr className={styles.hr} />       
    
            <div className={styles.container1}> 
              
                
                <div className={styles.item}>
                <LocalPhoneRoundedIcon className={styles.icon} />  
                </div>
                <div className={styles.item}>
                    <p className={styles.parags}>+48578003969</p>   
                </div>

                <div className={styles.item}>
                <LinkedInIcon className={styles.icon} /> 
                 </div>
                <div className={styles.item}>
                    <p className={styles.parags}>www.linkedin.com/in/vladislav-bertsel-75618b210</p>   
                </div>
   
                <div className={styles.item} >
                <GitHubIcon className={styles.icon} />   
                </div>
                <div className={styles.item}> 
                    <p className={styles.parags}> https://github.com/V-l-d11/Social-.git</p>    
                </div>

                <div className={styles.item}>
                <AlternateEmailIcon className={styles.icon} />   
                </div>
                <div className={styles.item}>
                <p className={styles.parags}>vlad.bertel@bk.ru</p>   
                </div>

            </div>
           
           
        </div>
    )
}
export default DataInfo
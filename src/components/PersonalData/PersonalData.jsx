import styles from './PersonalData.module.css'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import DataInfo from './DataInfo'
import icon from '../image/icon.png'
import IconInfo from './IconInfo'


const PersonalData = () => {
    return (
        <Grid className={styles.container} container spacing={2}>
           
     <Grid item xs={6}>
        <Item>
            <DataInfo />         
        </Item>
    </Grid>
    <Grid item xs={4}>
     <Item>
       <IconInfo />
     </Item>
    </Grid>

    <Grid item xs={10}>
     <Item>
        <p className={styles.parags1}>production@  Valislav Bertsel </p>  
     </Item>
                </Grid>
                
</Grid>
          
         
    )
}

export default PersonalData
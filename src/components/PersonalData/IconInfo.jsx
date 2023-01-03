import icon from '../image/icon.png'
import icon1 from '../image/icon1.png'
import icon2 from '../image/icon2.png'
import icon3 from '../image/icon3.png'
import icon4 from '../image/icon4.png'
import icon5 from '../image/icon5.png'
import icon6 from '../image/icon6.png'
import icon7 from '../image/icon7.png'
import icon8 from '../image/icon8.png'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import Box from '@mui/material/Box'
import styles from './PersonalData.module.css'



const IconInfo = () => {
    return (

        <Box className={styles.container3} sx={{ flexGrow: 6 }}>
      <Grid container spacing={1}>
                    <Grid container item spacing={3}>
                        
        <Grid item xs={3}>
                <Item>
                    <img src={icon} /> 
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
         <img src={icon1} />                        
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
        <img src={icon2} />                    
        </Item>
     </Grid>
                        
        </Grid>
        <Grid container item spacing={3}>
        <Grid item xs={3}>
                <Item>
                    <img src={icon3} /> 
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
         <img src={icon4} />                        
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
        <img src={icon5} />                    
        </Item>
     </Grid>
        </Grid>
        <Grid container item spacing={3}>
        <Grid item xs={3}>
                <Item>
                    <img src={icon6} /> 
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
         <img src={icon7} />                        
        </Item>
        </Grid>
        <Grid item xs={3}>
        <Item>
         <img src={icon8} />                        
        </Item>
      </Grid>
    
        </Grid>
      </Grid>
    </Box>
           

           
           
      
    )
}



export default IconInfo
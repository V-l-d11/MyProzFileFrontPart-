
import React from 'react'
import styles from './AboutMe.module.css'
import InfoMe from './InfoMe'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'


const AboutMe = () => {
    return (
        <>
<Grid  className={styles.container}  container spacing={1}>
  <Grid item xs={4}>
    <Item>
                        
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
      <InfoMe />          
    </Item>
  </Grid>
</Grid>
 </>
  )
}
export default AboutMe
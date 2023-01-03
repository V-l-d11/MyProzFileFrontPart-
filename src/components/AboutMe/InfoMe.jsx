import styles from './InfoMe.module.css'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
const InfoMe = () => {
    return (
        < Container className={styles.hcontainer} maxWidth="md" >
   
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Item> 
                        <h1 className={styles.pr}>About me </h1>
                        <hr className={styles.hr} />
                </Item>
                </Grid>
                
                <Grid item xs={8}>
                    <Item>
                    <p className={styles.pr}>Hi, my name is Vlad and I 'm from Belarus.Due to the political regime of Lukashenka, I was forced to leave for the territory of Poland.At the moment I am a student of the East Pomeranian University in Shchetin .I am studying at the Faculty of Computer Science in the second year</p>   
                    </Item>
                </Grid>
                
                <Grid item xs={4}>
                    <Item >
                    <p className={styles.pr}>How my career in programming began.Hmm, it's very simple.At first I was engaged in website design.But after that I became interested in how it all works .I started studying layout, and then switched to frontend.In February 2022 
                 I worked as a frontend developer in a company in Warsaw Redcode as a trainee, the duration of work is 3 months</p> 
                  </Item>
                </Grid>
               
                <Grid item xs={8}>
                    <Item>
                    <p className={styles.pr}>I really like communication and new acquaintances.If you are the same, then here you can find my contacts and we can chat and maybe find common interests.I am fond of sports , for example equestrian sports and various types of martial arts</p>
                    </Item>
                </Grid>
                
            </Grid>
            

        

            </Container>
    )
}

export default InfoMe
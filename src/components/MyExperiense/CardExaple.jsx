import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import styles from './MyExp.module.css'



const CrardExample= ()=> {
  return (
      
      <Card  className={styles.card} variant="outlined" sx={{ width: 320 }}>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }} textAlign='center' paddingTop='10px'>
          Git Hub
        </Typography>
        <Typography level="body2">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
          <img
            src="https://images.unsplash.com/photo-1637778352878-f0b46d574a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpdGh1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <Box sx={{ display: 'flex' }}>
          <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              $2,900
            </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', fontWeight: 600 }}
          >
            Explore
          </Button>
        </Box>
      </Card>
     
  );
  }
  export default CrardExample
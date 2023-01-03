import React from 'react'
import Avatar from '@mui/material/Avatar';
import style from './Header.module.css'
import { Link } from 'react-router-dom';
import  Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {logout ,selectIsAuth } from '../../Redux/slices/auth';

const Header = () => {
   const dispatch = useDispatch()
   const isAuth = useSelector(selectIsAuth)
   
    
    const onClickLogout = () => {
        if (window.confirm('Are you sure want to log,')) {
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
    }

    return (
        <div className={style.container}>
                       
            
            <Avatar className={style.item} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Link className={style.item } to='/abouteMe'> Aboute me </Link>
            <Link className={style.item} to='/myExp'>  My experience</Link>
            <Link className={style.item} to='/personalData'>Personal Data</Link>
            <Link className={style.item} to='/' > Main</Link>
            <Link className={style.item} to='/skills'> Skills</Link> 
            <div className={style.buttons}>
                {isAuth ? (
                    <>
                        <Link className={style.item} to="/add-post" >
                  <Button variant="contained">Написать статью</Button>
                        </Link>
                       
                  <Button onClick={onClickLogout} variant="contained" color="error">
                    Выйти
                  </Button>
                    </>
                ) : (
                        <>
              <Link className={style.item} to="/SignIN">
                  <Button className={style.btn} variant="outlined">Log in</Button>
                  </Link>
              <Link className={style.item} to="/register" >
                  <Button className={style.btn} variant="contained">Create</Button>
                  </Link>
                        </>
                )}
            </div>
            
           

          
        </div>
    )
}
export default Header
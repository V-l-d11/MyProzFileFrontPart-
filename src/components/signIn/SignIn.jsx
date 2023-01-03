import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styles from "./SignInn.module.css";
import {useForm} from 'react-hook-form'
import { useDispatch , useSelector } from "react-redux";
import { fetchUserData, selectIsAuth } from "../../Redux/slices/auth";
import {Navigate} from 'react-router-dom'

export const SignIn = () => {
  const isAuth = useSelector(selectIsAuth)
  
  const  dispatch = useDispatch()
  const { register,
    handleSubmit,
    setError,
    formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: 'listener@mail.ru',
      password: '123'
      },
      mode: 'onChange'
    })
  
  useEffect(() => {
   
  },[])
  
  
  const onSubmit = async (values) => {
    const data= await dispatch(fetchUserData(values))
    console.log(data)
    if (!data.payload) {
      alert('Unkorrekt')
    }
    else if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    } 
  }
  
  console.log('auth', isAuth)

  if (isAuth) {
    return <Navigate to="/" />
  }




  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={ handleSubmit(onSubmit) }>
      <TextField
        className={styles.field}
          label="E-Mail"
          type="email"
        error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email' , {required: 'Pleas write a mail'})}
        fullWidth
      />
        <TextField className={styles.field}
          label="Пароль"
          error={Boolean(errors.password?.message)}
          {...register('password' , {required: 'Pleas write a password'})}
          helperText={errors.password?.message}
          fullWidth />
      <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
        Войти
      </Button>
    </form>
    </Paper>
  );
};


export default SignIn
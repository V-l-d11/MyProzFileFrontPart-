import './App.css';

import { Routes,Route, json } from 'react-router-dom';
import Header from './components/Header/Header';
import MySkills from './components/Skills/MySkills';
import Loader from './components/UI/Loader';
import Main from './components/Main/Main'
import AbouteMe from './components/AboutMe/AboutMe'
import MyExp from './components/MyExperiense/MyExp'
import PersonalData from './components/PersonalData/PersonalData'
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';
import { useEffect } from 'react';
import axios from './axios';
import { Home } from './PostsHome/Home';
import {useDispatch, useSelector} from 'react-redux'
import { fetchAuthMe, selectIsAuth } from './Redux/slices/auth';
import {AddPost} from './PostsHome/pages/AddPost'
import {FullPost} from './PostsHome/pages/FullPost'


function App() {

 const dispatch= useDispatch()
 const isAuth = useSelector(selectIsAuth)
 
console.log(isAuth)
  useEffect(() => {
 dispatch(fetchAuthMe())
  },[])
  

  
  return (
    <div>
       <Header />
      <Routes>
        
        <Route path='/postHome' element={ <Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/abouteMe" element={<AbouteMe />} />
        <Route path="/myExp" element={<MyExp />} />
        <Route path="/personalData" element={<PersonalData />} />
        
        <Route path="/skills" element={<MySkills />} />
        <Route path="/signIn" element={<SignIn />}  />
        <Route path="/register" element={<Register />} />
     
        <Route path="/posts/:id/edit" element={<AddPost />} />
        <Route path="/add-post" element={<AddPost />} />  
        <Route path="/posts/:id" element={<FullPost />} />
      
        </Routes>
   </div>
  );
}

export default App;

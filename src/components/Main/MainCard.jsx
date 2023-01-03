import Button from "@mui/material/Button";
import style from './Main.module.css'
import {Link} from 'react-router-dom'

const MainCard = () => {
    return (
        <>
            <div className={style.item}>
             <span className={style.spann}>Vladislav Bertsel 2022</span>
             <h1 className={style.head}>PORT</h1>
             <h1 className={style.head}>FOLIO</h1>
             <span className={style.spann}>Front-end Developer</span>
            </div>
            
            <div className={style.item}>
             <h3 className={style.regist}>register and you </h3>
             <h3 className={style.regist}>will be able to chat with </h3>
             <h3 className={style.regist}>everyone</h3>
                <Link to="/register" className={style.buttomEl}>Register</Link>

            </div>
           
         
        </>
    )
}
export default MainCard
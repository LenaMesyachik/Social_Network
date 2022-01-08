import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
type HeaderPropsType = {
    setAuthUserData: (id: null | number,  email: null | string, login: null | string, isAuth: false) => void
    isAuth:boolean,
    login:null | string
}

const Header = (props:HeaderPropsType ) => {
    return  <header className={s.header}>
        <img src='https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl.jpg' />
   <div className={s.loginBlock}>
       {props.isAuth ? props.login
       :   <NavLink to={'/login'}>Login</NavLink>}
   </div>
    </header>
}
export default Header
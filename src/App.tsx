import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContanier";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContanier";
import {HeaderContainer} from "./Components/Header/HeaderContainer";

/*export type AppPropsType = {
    store: Store<RootReducerType, AllActionsCreatorType>
    dispatch: (action: AllActionsCreatorType) => void
}*/


export const App = () => {
    /*const state = props.store.getState()*/
    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>

    );
}

export default App;
import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {AllActionsCreatorType, RootReducerType} from "./redux/redux-store";
import {Store} from "redux";
import DialogsContainer from "./Components/Dialogs/DialogsContanier";

export type AppPropsType = {
    store: Store<RootReducerType, AllActionsCreatorType>
    dispatch: (action: AllActionsCreatorType) => void
}


export const App: React.FC<AppPropsType> = (props) => {
    /*const state = props.store.getState()*/
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile' render={() => <Profile store={props.store}
                />}/>
            </div>
        </div>

    );
}

export default App;
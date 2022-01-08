import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {RootReducerType} from "../../redux/redux-store";

type HeaderPropsType = {
    setAuthUserData: (id: null | number,  email: null | string, login: null | string, isAuth: false) => void
}
type AuthResponseType = {
    data: { id: number, email: string, login: string  },
    resultCode: number,
    messages: Array<string>
}

class HeaderContainer extends React.Component <HeaderPropsType> {
    componentDidMount() {

        axios.get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page/auth/me`, {
            withCredentials: true
        }).then((response) => {
            debugger
            if (response.data.resultCode === 0) {
                debugger
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login, false)
            }
        })
    }

    render() {
        return <Header  />
    }
}


export default connect(null, {setAuthUserData})(HeaderContainer)
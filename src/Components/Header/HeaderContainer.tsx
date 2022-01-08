import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {RootReducerType} from "../../redux/redux-store";


export enum ResultCodeEnum {
    Success,
    Error = 1
}
type HeaderPropsType = {
    setAuthUserData: (id: null | number,  email: null | string, login: null | string, isAuth: false) => void
    isAuth:boolean,
    login:null | string
}
type AuthResponseType = {
    data: { id: number, email: string, login: string  },
    resultCode: ResultCodeEnum,
    messages: Array<string>
}

class HeaderContainer extends React.Component <HeaderPropsType> {
    componentDidMount() {

        axios.get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page/auth/me`, {
            withCredentials: true
        }).then((response) => {
            debugger
            if (response.data.resultCode === ResultCodeEnum.Success) {
                debugger
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login, false)
            }
        })
    }

    render() {
        return <Header {...this.props} setAuthUserData={this.props.setAuthUserData} isAuth = {this.props.isAuth} login={this.props.login} />
    }
}

export const mapStateToProps = (state:RootReducerType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
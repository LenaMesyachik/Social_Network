import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {RootReducerType} from "../../redux/redux-store";

type HeaderPropsType = {
    setAuthUserData: ( id: null, email: null, login: null ) => void
}

export class HeaderContainer extends React.Component <HeaderPropsType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page/auth/me`, {
            withCredentials: true
        }).then(response => {
            debugger
            if (response.data.resultCode === 0) {
                debugger
                let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header /*{...this.props}*//>
    }
}

const mapStateToProps = (state: RootReducerType) => {

}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import { ProfileType, setUsersProfile} from "../../redux/profileReducer";
import {RootReducerType} from "../../redux/redux-store";
import {Route, RouteComponentProps, withRouter} from "react-router-dom";

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

export type MapStatePropsType = {
    setUsersProfile:( profile:  ProfileType) => void
}
export type MapDispatchPropsType = {
    profile: ProfileType
}
type PathParamsType = {
    userId:string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
class ProfileContainer extends React.Component <PropsType>{
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        debugger
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId
        )
            .then(response => {
                debugger
            this.props.setUsersProfile(response.data)
        })
    }
render () {
    return (
        <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    )
} }

const mapStateToProps = (state:RootReducerType) => (  {
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent)


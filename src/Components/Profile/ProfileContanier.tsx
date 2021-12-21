import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import { ProfileType, setUsersProfile} from "../../redux/profileReducer";
import {RootReducerType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

export type ProfileContainerPropsType = {
    profile: ProfileType,
    setUsersProfile:( profile:  ProfileType) => void
}
class ProfileContainer extends React.Component <ProfileContainerPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
            this.props.setUsersProfile(response.data.profile)


        })
    }
render () {
    return (
        <div>
            <Profile {...this.props} />
        </div>
    )
} }

const mapStateToProps = (state:RootReducerType) => ({
    profile: state.profilePage.profile
})

/*const WithUrlDataContainerComponent = withRouter(ProfileContainer)*/
export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer)


import {combineReducers, createStore, Store} from "redux";
import profileReducer, {addPostA, changePostA, setUsersProfile} from "./profileReducer";
import dialogsReducer, {sendMessageA, updateMessageA} from "./dialogsReducer";
import usersReducer, {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers, toggleIsFetching,
    unfollow
} from "./usersReducer";
import {authReducer, setAuthUserData} from "./authReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});
export type RootReducerType = ReturnType<typeof rootReducer>

export type AllActionsCreatorType =
    ReturnType<typeof addPostA>
    | ReturnType<typeof changePostA>
    | ReturnType<typeof sendMessageA>
    | ReturnType<typeof updateMessageA>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setAuthUserData>


let store: Store<RootReducerType, AllActionsCreatorType> = createStore(rootReducer);

// @ts-ignore
window.store = store


export default store;
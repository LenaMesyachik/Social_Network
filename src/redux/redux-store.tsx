import {combineReducers, createStore, Store} from "redux";
import profileReducer, {addPostA, changePostA} from "./profileReducer";
import dialogsReducer, {sendMessageA, updateMessageA} from "./dialogsReducer";
import usersReducer, {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC
} from "./usersReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});
export type RootReducerType = ReturnType<typeof rootReducer>

export type AllActionsCreatorType =
    ReturnType<typeof addPostA>
    | ReturnType<typeof changePostA>
    | ReturnType<typeof sendMessageA>
    | ReturnType<typeof updateMessageA>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof toggleIsFetchingAC>



let store: Store<RootReducerType, AllActionsCreatorType> = createStore(rootReducer);

export default store;
import {combineReducers, createStore, Store} from "redux";
import profileReducer, {addPostA, changePostA} from "./profileReducer";
import dialogsReducer, {sendMessageA, updateMessageA} from "./dialogsReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});
export type RootReducerType = ReturnType<typeof rootReducer>

export type AllActionsCreatorType =
    ReturnType<typeof addPostA>
    | ReturnType<typeof changePostA>
    | ReturnType<typeof sendMessageA>
    | ReturnType<typeof updateMessageA>


let store: Store<RootReducerType, AllActionsCreatorType> = createStore(rootReducer);

export default store;
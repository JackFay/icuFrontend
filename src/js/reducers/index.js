import { combineReducers } from "redux"

import user from "./userReducer"
import settings from "./settingsReducer"

export default combineReducers({
    user,
    settings
})

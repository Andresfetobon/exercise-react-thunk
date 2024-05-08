import { configureStore } from "@reduxjs/toolkit"
import users from "../slices/users.slices"


export default configureStore({
    reducer:{
        users
    }
})
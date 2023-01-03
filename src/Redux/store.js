import { cofigureStore, configureStore } from '@reduxjs/toolkit'
import { dataReducer } from './slices/dataInfo'
import { postsReducer } from './slices/posts'
import {authReducer} from './slices/auth'

const store = configureStore({
    reducer: {
        links: dataReducer,
        posts: postsReducer,
        auth:authReducer,
    }
})

export default store 
import { combineReducers } from "redux";
import postsReducer from './postsReducer.ts'

export type StateObject = {
    posts: any
}

const rootReducer = combineReducers({
    posts: postsReducer
})

export default rootReducer
import { AnyAction } from "redux"
import { FETCH_POSTS } from "../actions/types"

const postsReducer = (initialPosts: any = null, action: AnyAction) => {
    switch (action.type) {
        case FETCH_POSTS: {
            return action.payload
        }

        default: {
            return initialPosts
        }
    }
}

export default postsReducer

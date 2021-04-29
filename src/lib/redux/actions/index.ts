import { FETCH_POSTS } from './types'
import jsonPlaceholder from '../../apis/jsonPlaceholder'
import { Dispatch } from 'redux'
export const fetchPosts = () => async (dispatch:Dispatch) => {
    const response = await jsonPlaceholder.get('/posts')
    const data = response.data
    dispatch({
        type: FETCH_POSTS,
        payload: data
    })
}


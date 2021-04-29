import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchPosts } from "../lib/redux/actions"
import { StateObject } from "../lib/redux/reducers"
import { PostsObject } from "../types"
interface Props {
    fetchPosts: () => any
    posts: PostsObject[]
}

const PostList: React.FC<Props> = ({ fetchPosts, posts }) => {
    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    return (
        <>
            <h1> Post List </h1>
            <div>
                {posts?.map(post => (
                    <div key={post.title}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

const mapStateToProps = (state: StateObject) => {
    return {
        posts: state.posts,
    }
}
export default connect(mapStateToProps, {
    fetchPosts,
})(PostList)

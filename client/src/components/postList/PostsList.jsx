import React, {useEffect} from 'react';
import './PostsList.scss'
import {PostItem} from "../index";
import {useDispatch, useSelector} from "react-redux";
import {setPosts} from "../../store/asyncActyons/asyncPosts";
import {Link} from "react-router-dom";

const PostsList = () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.postsReduser.posts)

    useEffect(() => {
        dispatch(setPosts())
    }, [])

    return (
        <div className="posts-list">
            <Link to={'/addpost'}>
                <button type={'button'} className={'btn btn-primary btn-addpost'}>
                    Add post
                </button>
            </Link>
            {posts.length ? posts.map((post) => (
                    <div className={'post-items'} key={post._id}>
                        <PostItem {...post}/>
                    </div>
                )) :
                <div>
                    Loading...
                </div>}
        </div>
    );
};

export default PostsList;
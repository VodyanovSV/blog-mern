import React, {useEffect, useState} from 'react';
import './FullPost.scss'
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const FullPost = ({createAt}) => {

    const posts = useSelector(state => state.postsReduser.posts)

    const {id} = useParams()
    const [currentPost, setCurrentPost] = useState({})

    useEffect(() => {
        const post = posts.find((post) => post._id === id)
        setCurrentPost(post)
    }, [])


    return (
        <div className={'full-post'}>
            <div className="container">
                <Link to={'/'} className={'btn btn-primary'}>
                    Back
                </Link>
                <h2>{currentPost.title}</h2>
                <div className={'details'}>
                    {Object.keys(currentPost).length ?
                        <i>Posted on {createAt}</i>
                        :
                        <i>Постов нет</i>
                    }
                </div>
                <p>
                    {currentPost.text}
                </p>
            </div>
        </div>
    );
};

export default FullPost;
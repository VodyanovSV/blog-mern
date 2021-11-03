import React from 'react';
import './PostsList.scss'
import {Link} from "react-router-dom";

const PostsList = () => {

    return (
        <div className="posts-list">
            <Link to={'/addpost'}>
                <button type={'button'} className={'btn btn-primary btn-addpost'}>
                    Add post
                </button>
            </Link>
        </div>
    );
};

export default PostsList;
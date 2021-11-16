import React from 'react';
import {Link} from "react-router-dom";
import './PostItem.scss'

const PostItem = ({title, createdAt, _id}) => {

    return (
        <div className="post-item">
            <Link to={`/post/${_id}`}>
                <h2>{title}</h2>
            </Link>
        </div>
    );
};

export default PostItem;
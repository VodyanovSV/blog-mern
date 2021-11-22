import React from 'react';
import {Link} from "react-router-dom";
import './PostItem.scss'
import {useDispatch} from "react-redux";
import {removePost} from "../../store/asyncActyons/asyncPosts";

const PostItem = ({title, createdAt, _id}) => {

    const dispatch = useDispatch()

    function removeHandler(event) {
        event.preventDefault()
        dispatch(removePost(_id))
    }

    return (
        <div className="post-item">
            <Link to={`/post/${_id}`}>
                <h2>{title}</h2>
            </Link>
            <p>
                <i>Posted on {createdAt}</i>
                <a href={'#'} onClick={removeHandler}>Remove</a>
                <Link to={`/post/${_id}/edit`}>Edit</Link>
            </p>
        </div>
    );
};

export default PostItem;
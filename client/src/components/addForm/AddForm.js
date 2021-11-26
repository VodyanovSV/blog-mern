import React, {useEffect, useState} from 'react';
import './AddForm.scss'
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addPost, editPost} from "../../store/asyncActyons/asyncPosts";

const AddForm = ({type}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const posts = useSelector(state => state.postsReduser.posts)

    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        if (type === 'edit') {
            const post = posts.find(post => post._id === id)
            setTitle(post.title)
            setUrl(post.imageUrl)
            setContent(post.text)
        }
    }, [])


    function titleHandler(event) {
        setTitle(event.target.value)
    }

    function urlHandler(event) {
        setUrl(event.target.value)
    }

    function contentHandler(event) {
        setContent(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        if (type === 'add') {
            dispatch(addPost({title, url, content}))
        } else {
            dispatch(editPost({id, title, url, content}))
        }
        navigate('/')
    }

    return (
        <div className="addForm">
            <Link to={'/'}>
                <button type={'button'} className={'btn btn-primary btn-to-main'}>
                    To main
                </button>
            </Link>
            <form>
                <div className="mb-3">
                    <div className={'add-form__row'}>
                        <h4>
                            <label htmlFor="title" className="form-label">Title</label>
                        </h4>
                        <input type="text" className="form-control" id="title"
                               aria-describedby="emailHelp" placeholder={'Enter title'} value={title}
                               onChange={titleHandler}/>
                    </div>
                    <div className={'add-form__row'}>
                        <h4>
                            <label htmlFor="image" className="form-label">Image URL</label>
                        </h4>
                        <input type="text" className="form-control" id="image"
                               aria-describedby="emailHelp" placeholder={'Enter image URL'} value={url}
                               onChange={urlHandler}/>
                    </div>
                    <div className={'add-form__row'}>
                        <h4>
                            <label htmlFor="description" className="form-label">Description</label>
                        </h4>
                        <textarea rows={'8'} className="form-control" id="description"
                                  aria-describedby="emailHelp" placeholder={'Enter text'} value={content}
                                  onChange={contentHandler}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
            </form>
        </div>
    );
};

export default AddForm;
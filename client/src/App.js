import React from 'react'
import {HeaderBlock, PostItem, AddForm, PostsList, FullPost} from './components'
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom'

function App() {

    const imageUrl = window.location.origin + '/images/bg_header.jpg'

    return (
        <div className={'App'}>
            <HeaderBlock title={'Заголовок сайта'} description={'Описание'} imageUrl={imageUrl}/>
            <div className="container">
                <div className="content">
                    <div className="content">
                        <Router>
                            <Routes>
                                <Route path={'/'} exact element={<PostsList/>}/>
                                <Route path={'/addpost'} exact element={<AddForm type={'add'}/>}/>
                                <Route path={'/post/:id'} exact element={<FullPost createAt={' ' + new Date().toLocaleDateString()}/>}/>
                                <Route path={'/post/:id/edit'} exact element={<AddForm type={'edit'}/>}/>
                                <Route path="*" element={<Navigate to="/"/>}/>
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;

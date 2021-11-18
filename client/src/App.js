import React from 'react'
import {HeaderBlock, AddForm, PostsList, FullPost} from './components'
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
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;

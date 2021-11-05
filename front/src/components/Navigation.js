import React, { useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/actions/authAction';

export default function Navigation() {

    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);

    const signOut = useCallback(() => dispatch(logout()), [dispatch]);

    const authButtons = token === ""
        ? <>
            <Link className="nav-link" to="/SignIn">SignIn</Link>
            <Link className="nav-link" to="/SignUp">SignUp</Link>
        </>
        : <Link className="nav-link" onClick={signOut} to="#">SignOut</Link>

    const buttonsForAuthUser = token === ""
        ? <></>
        : <>
            <Link className="nav-link" to="/createArticle">Create Article</Link>
            <Link className="nav-link" to="/myArticles">My Article</Link>
        </>

    return (
        <Navbar bg="light" expand="lg">
            <Link className="navbar-brand" to="/">MarbokBlog</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/topics">Topics</Link>
                    {buttonsForAuthUser}
                </Nav>
                <Nav >
                    {authButtons}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

import './SignIn.css';

export default function AuthForm({ action, error_message, button_name }) {

    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const next = useSelector(state => state.auth.next);

    const signUp = () => dispatch(action(nickname, password));

    const events = {
        'ERROR': <div>{error_message}</div>,
        'REDIRECT': <Redirect to="/" />,
        'START': <></>
    }

    return (
        <Form className="signin">
            <Form.Group controlId="nickname">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="text" onChange={e => setNickname(e.target.value)} placeholder="Enter nickname" />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" onClick={signUp}>
                {button_name}
            </Button>
            {events[next]}
        </Form>
    )
}
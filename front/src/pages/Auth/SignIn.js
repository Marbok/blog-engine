import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth, logout } from '../../redux/actions/authAction';
import AuthForm from './AuthForm';

function SignIn() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <AuthForm
            error_message='Authorization Error'
            button_name='SignIn'
            action={auth}
        />
    )
}

export default SignIn;
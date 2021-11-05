import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registration, logout } from '../../redux/actions/authAction';
import AuthForm from './AuthForm';

export default function Registration() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <AuthForm
            error_message='Nickname exists'
            button_name='SignUp'
            action={registration}
        />
    )
}
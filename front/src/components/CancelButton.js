import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function CancelButton() {
    const history = useHistory();
    const cancel = () => history.goBack();

    return (
        <Button variant="primary" onClick={cancel}>Cancel</Button>
    );

}
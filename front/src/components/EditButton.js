import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export default function EditButton({ id }) {

    const history = useHistory();

    const edit = e => history.push(`/editArticle/${e.target.value}`);

    return (
        <Button value={id} variant="light" size="sm" onClick={edit}>Edit</Button>
    )
}
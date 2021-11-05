import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import API from 'api/API';
import Articles from './Articles';

import { Link } from 'react-router-dom';

import EditButton from 'components/EditButton';

export default function MyArticles() {
    const [articles, setArticles] = useState([]);
    const { nickname } = useSelector(state => state.auth);

    useEffect(() => {
        API.getArticlesByNickname(nickname)
            .then(json => setArticles(json));
    }, [nickname]);

    const indexFabric = (id, link, title) => {
        return (
            <>
                <Link to={link}>{title}</Link> <EditButton id={id} />
            </>)
    }

    return (
        <Articles articles={articles} indexFabric={indexFabric} />
    )
}
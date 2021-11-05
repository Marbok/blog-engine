import React, { useEffect, useState } from 'react';
import API from 'api/API';
import Articles from './Articles';

export default function ArticlesByTopic({ match: { params: { idTopic } } }) {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        API.getArticlesByTopicId(idTopic)
            .then(json => setArticles(json));
    }, [idTopic]);

    return (
        <Articles articles={articles} />
    )
}
import React, { useEffect, useState } from 'react';
import API from 'api/API';

import Title from './Title'
import Description from './Description'
import Content from './Content'

export default function Article({ match: { params: { idArticle } } }) {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        API.getArticle(idArticle)
            .then(article => {
                setTitle(article.title);
                setAuthor(article.author);
                setDescription(article.description);
                setContent(article.content);
            })
    }, [idArticle])

    return (
        <div>
            <Title title={title} />
            <div>Author: {author}</div>
            <Description description={description} />
            <Content content={content} />
        </div>
    );

}
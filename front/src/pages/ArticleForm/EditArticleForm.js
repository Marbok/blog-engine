import React, { useState, useEffect } from 'react';
import API from 'api/API';
import { useHistory } from 'react-router-dom';

import ArticleForm from './ArticleForm';

export default function EditArticleForm({ match: { params: { idArticle } } }) {

    const [topics, setTopics] = useState([]);
    const [topic, setTopic] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const history = useHistory();

    useEffect(() => {
        Promise.all([
            API.getTopics(),
            API.getArticle(idArticle)
        ]).then(([topics, article]) => {
            setTopics(topics);
            setTitle(article.title);
            setDescription(article.description);
            setContent(article.content);
            setTopic(topics.find(topic => topic.id === article.topic.id).id);
        });
    }, [idArticle]);

    const save = (article) => {
        console.log(idArticle);
        API.editArticle(article, idArticle)
            .then(json => { history.push(`/article/${idArticle}`) });
    }

    return (
        <ArticleForm
            topics={topics}
            topicId={topic}
            save={save}
            title={title}
            description={description}
            content={content} />
    )
}
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from 'api/API';

import ArtcleForm from './ArticleForm';

export default function NewArticleForm() {

    const [topic, setTopic] = useState(0);
    const [topics, setTopics] = useState([]);

    const history = useHistory();

    useEffect(() => {
        API.getTopics()
            .then(json => {
                if (json.length > 0) {
                    setTopics(json);
                    setTopic(json.find(() => true).id);
                }
            });
    }, []);

    const save = (article) => {
        API.saveArticle(article)
            .then(json => { history.push(`/article/${json.articleId}`) });
    }

    return (
        <ArtcleForm
            topics={topics}
            topicId={topic}
            save={save}
        />
    )
}
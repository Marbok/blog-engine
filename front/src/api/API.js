import { store } from 'redux/store';
import { topicsUrl, saveArticleUrl, articlesUrl, articleUrl } from 'constants/URLs';

class API {

    token() {
        return store.getState().auth.token;
    }

    async getTopics() {
        return await fetch(topicsUrl)
            .then(responce => responce.json());
    }

    async saveArticle(article) {
        const params = {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${this.token()}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(article)
        }
        return await fetch(saveArticleUrl, params)
            .then(res => res.json())
    }

    async editArticle(article, articleId) {
        const params = {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${this.token()}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(article)
        }
        return await fetch(`${articleUrl}/${articleId}`, params)
            .then(res => res.json())
    }

    async getArticlesByTopicId(id) {
        return await fetch(`${articlesUrl}?topicId=${id}`)
            .then(responce => responce.json());
    }

    async getArticlesByNickname(nickname) {
        return await fetch(`${articlesUrl}?nickname=${nickname}`)
            .then(responce => responce.json());
    }

    async getArticles() {
        return await fetch(articlesUrl)
            .then(responce => responce.json());
    }

    async getArticle(id) {
        return await fetch(`${articleUrl}/${id}`)
            .then(result => result.json());
    }
}

export default new API();
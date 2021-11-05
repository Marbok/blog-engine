import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Topics from 'pages/Topics/Topics';
import Main from 'pages/Main/Main';
import ArticlesByTopic from 'pages/Articles/ArticlesByTopic';
import Article from 'pages/Article/Article';
import SignIn from 'pages/Auth/SignIn';
import Registration from 'pages/Auth/Registration';
import NewArticleForm from 'pages/ArticleForm/NewArticleForm';
import MyArticles from 'pages/Articles/MyArticles';
import EditArticleForm from 'pages/ArticleForm/EditArticleForm';

export default function Switcher() {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/topics" component={Topics} />
            <Route path="/myArticles" component={MyArticles} />
            <Route path="/articles/:idTopic" component={ArticlesByTopic} />
            <Route path="/article/:idArticle" component={Article} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={Registration} />
            <Route path="/createArticle" component={NewArticleForm} />
            <Route path='/editArticle/:idArticle' component={EditArticleForm} />
        </Switch>
    )
}
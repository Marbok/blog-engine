import React from 'react';
import { Link } from 'react-router-dom';

const defaultIndexFabric = (id, link, title) => <Link to={link}>{title}</Link>;

export default function Articles({ articles, indexFabric = defaultIndexFabric }) {

    let articlesList = articles.map(({ id, title }) => {
        const link = `/article/${id}`;
        return (
            <li key={id}>
                {indexFabric(id, link, title)}
            </li>)
    })

    return (
        <ul>
            {articlesList}
        </ul>
    )
}
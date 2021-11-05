import React, { useEffect, useState } from 'react';
import API from 'api/API';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CardColumns from 'react-bootstrap/CardColumns';

import './main.css';

export default function Main() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        API.getArticles()
            .then(json => setArticles(json));
    }, [])

    const renderCard = ({ id, title, description }) => {
        const titleLink = <Link to={`article/${id}`}>{title}</Link>
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{titleLink}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    const cards = articles.map(article => renderCard(article));

    return (
        <CardColumns className='columns'>
            {cards}
        </CardColumns>
    )
}

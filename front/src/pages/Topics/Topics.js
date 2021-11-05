import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from 'api/API';

export default function Topics() {

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    API.getTopics()
      .then(json => setTopics(json));
  }, []);

  let topicsList = topics.map(({ id, name }) => {
    const link = `/articles/${id}`;
    return (
      <li key={id}>
        <Link to={link}>{name}</Link>
      </li>)
  })

  return (
    <div>
      <div>Темы</div>
      <ul>
        {topicsList}
      </ul>
    </div>
  )
}
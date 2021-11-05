create table topic (
    topic_id bigint auto_increment,
    name varchar(255),
    primary key (topic_id)
);

create table article (
    article_id bigint auto_increment,
    content varchar(255),
    description varchar(255),
    title varchar(255),
    nickname varchar(255),
    topic_id bigint,
    primary key (article_id),
    foreign key (topic_id) references topic(topic_id)
);

create table author (
    nickname varchar(255) not null,
    password varchar(255),
    role varchar(255),
    primary key (nickname)
);
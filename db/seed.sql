CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(5000),
password VARCHAR(5000),
profile_pic text 
);

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title VARCHAR(5000),
img text,
content text,
author_id INTEGER REFERENCES users(id)
);


INSERT INTO users(username,password,profile_pic)
VALUES ('DCRAZYLEGS', 'asdf','https://robohash.org/rrewrew' ),
 ('LEGSCRAZYD', 'fdsa','https://robohash.org/rrewrew' ),
 ('LEGSDCRAZY', 'sadf','https://robohash.org/rrewrew' );

INSERT INTO posts(title,img,content)
VALUES ('WOHOHO', 'https://photobucket.com/gallery/user/mastersig/media/cGF0aDpBdml0YXJzL0ZvciBNZS9DX0RfQS5wbmc=?page=1&searchTerm=short%20url', 'LOOKOUT FOOLS'  ),
 ('WOHOHO', 'https://i65.photobucket.com/albums/h214/L_The_Legend/DeathNoteS01E09E.png?width=250&height=250&crop=1:1,smart', 'THOUGHT ABOUT THEN WAS LIKE NAH'  ),
 ('ULYSSES', 'https://i217.photobucket.com/albums/cc312/mastersig/Avitars/For%20Me/DAngel.png?width=250&height=250&crop=1:1,smart', 'EFERYONE LOOKIN CRUNK'  )


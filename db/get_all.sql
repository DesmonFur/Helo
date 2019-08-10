-- SELECT * FROM posts;

-- SELECT * FROM users u  
-- JOIN posts p  ON p.id = u.id
-- WHERE username = 'LEGSCRAZYD';


SELECT * FROM posts p 
JOIN users u ON p.id = u.id
WHERE username = 'LEGSCRAZYD';
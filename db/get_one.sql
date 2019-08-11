-- WHERE id = $1

-- SELECT * FROM users u  
-- JOIN posts p  ON  u.id = p.author.id
-- WHERE p.author.id = $1;


SELECT * FROM posts p 
JOIN users u ON p.author_id = u.id
WHERE p.author_id = $1;
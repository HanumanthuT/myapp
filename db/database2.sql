-- database2.sql
CREATE DATABASE IF NOT EXISTS epicbook2;
USE epicbook2;

CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  body TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES epicbook1.users(id)
);

-- Sample data
INSERT INTO posts (user_id, title, body) VALUES
(1, 'My First Post', 'This is the body of my first post'),
(2, 'Hello World', 'Welcome to my blog!'),
(3, 'Node.js Rocks', 'Node.js + MySQL + EJS + Nginx demo');
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(email) VALUES
('amy.sd@yahoo.com'), ('pranay.sd@gmail.com');

SELECT 
	DATE_FORMAT(MIN(created_at), "%M %D %Y") AS earliest_date
FROM users;

SELECT 
	email,
    created_at
FROM users
WHERE created_at = (SELECT MIN(created_at) FROM users);

SELECT
    MONTHNAME(created_at) AS month,
    COUNT(*) AS count
FROM users
GROUP BY month
ORDER BY count DESC;

SELECT 
    COUNT(*) AS yahoo_users
FROM users
WHERE email LIKE '%yahoo.com';

SELECT
    CASE
    	WHEN email LIKE '%gmail.com' THEN 'gmail'
        WHEN email LIKE '%yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END AS provider,
    COUNT(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(email) VALUES
('amy.sd@yahoo.com'), ('pranay.sd@gmail.com');

SELECT 
DATE_FORMAT(created_at, "%M %D %Y") AS earliest_date
FROM users
ORDER BY earliest_date
LIMIT 1;
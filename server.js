const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening on port ${port}`));

/**
Create Table IF NOT EXISTS user(
ID INTEGER PRIMARY KEY AUTOINCREMENT,
Username VARCHAR(24) NOT NULL,
Password VARCHAR(24) NOT NULL
);

INSERT INTO user (Username, Password) VALUES("tkasozi","Veex");

SELECT * FROM user LIMIT 1000;

DROP Table IF EXISTS user;
 */
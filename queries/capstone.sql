CREATE TABLE comment (
    id serial PRIMARY KEY,
    account_id INTEGER NOT NULL,
    comment TEXT NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menuChoice(
    id serial PRIMARY KEY,
    vegan boolean NOT NULL,
    vegetarian boolean NOT NULL,
    glutenFree boolean NOT NULL
);

CREATE TABLE restuarant(
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    typeOfFood VARCHAR(255) NOT NULL,
    website VARCHAR(255) NOT NULL,
    menuChoiceId INTEGER NOT NULL REFERENCES menuChoice(id),
    rating INTEGER NOT NULL
);
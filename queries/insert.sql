INSERT INTO menuChoice(
    id,
    vegan,
    vegetarian,
    glutenFree
)
VALUES(
    1,
    TRUE,
    TRUE,
    FALSE
);

INSERT INTO restuarant(
    name,
    location,
    typeOfFood,
    website,
    menuChoiceId,
    rating
)
VALUES(
    'Badass Burgers',
    'Food Truck Constantly Moving',
    'Plate Lunches & Burgers',
    'https://www.badassburgershawaii.com/',
    1,
    5
);
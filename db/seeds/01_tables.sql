-- Users table seeds here (Example)
INSERT INTO users (name) 
VALUES 
('Alice'),
('Kira');

INSERT INTO film_series (user_id, title)
VALUES
(1, "Lords of the Ring"),
(1, "Harry Potter"),
(2, "Akira"),
(2, "Spirited Away");

INSERT INTO restaurants (user_id, title)
VALUES
(1, "McDonalds"),
(1, "KFC"),
(2, "A&W"),
(2, "Taco Bell");

INSERT INTO books (user_id, title)
VALUES
(1, "Eragon", ),
(1, "To Kill a Mockingbird"),
(2, "The Great Gatsby"),
(2, "Clockwork Orange");

INSERT INTO products (user_id, title)
VALUES
(1, "Pen"),
(1, "Paper"),
(2, "Plastic"),
(2, "Pomegranate");

INSERT INTO no_match (user_id, title)
VALUES
(1, "adwiudhauiwdhwiaud"),
(1, "eegiojrofij"),
(2, "vfoivjodfijvoid"),
(2, "eoirejrejc");

-- INSERT INTO film_series (title) VALUES ('Kira');

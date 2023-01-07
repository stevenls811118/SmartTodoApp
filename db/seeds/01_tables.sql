-- Users table seeds here (Example)
INSERT INTO users (name) 
VALUES 
('Alice'),
('Kira');

INSERT INTO lists (user_id, list_name)
VALUES
-- (1, "Films/Series (To Watch)"),
-- (1, "Restaurants/Cafes (To Eat)"),
(1, 'Books (To Read)');
-- (1, "Products (To Buy)"),
-- (1, "Uncategorized"),
-- (2, "Films/Series (To Watch)"),
-- (2, "Restaurants/Cafes (To Eat)"),
-- (2, "Books (To Read)"),
-- (2, "Products (To Buy)"),
-- (2, "Uncategorized"),

INSERT INTO items (list_id, item_name)
VALUES
(1, 'Lord of the Rings'),
(1, 'Huckleberry Finn'),
(1, 'Harry Potter');


-- INSERT INTO restaurants (user_id, title)
-- VALUES
-- (1, "McDonalds"),
-- (1, "KFC"),
-- (2, "A&W"),
-- (2, "Taco Bell");

-- INSERT INTO books (user_id, title)
-- VALUES
-- (1, "Eragon", ),
-- (1, "To Kill a Mockingbird"),
-- (2, "The Great Gatsby"),
-- (2, "Clockwork Orange");

-- INSERT INTO products (user_id, title)
-- VALUES
-- (1, "Pen"),
-- (1, "Paper"),
-- (2, "Plastic"),
-- (2, "Pomegranate");

-- INSERT INTO no_match (user_id, title)
-- VALUES
-- (1, "adwiudhauiwdhwiaud"),
-- (1, "eegiojrofij"),
-- (2, "vfoivjodfijvoid"),
-- (2, "eoirejrejc");

-- INSERT INTO film_series (title) VALUES ('Kira');

-- Users table seeds here (Example)
INSERT INTO users (name) 
VALUES 
('Alice'),
('Kira');

INSERT INTO lists (user_id, list_name)
VALUES
(1, 'Film/Series (To Watch)'),
(1, 'Restaurants/Cafes (To Eat)'),
(1, 'Books (To Read)'),
(1, 'Products (To Buy)'),
(1, 'Others'),
(2, 'Movies (To Watch)'),
(2, 'Restaurants/Cafes (To Eat)'),
(2, 'Books (To Read)'),
(2, 'Products (To Buy)'),
(2, 'Others');

INSERT INTO items (list_id, item_name)
VALUES
(1, 'Avatar: The Way of Water'),
(1, 'Violent Night'),
(1, 'The Whale'),
(1, 'Strange World'),
(1, 'Knives Out'),
(1, 'The Room'),
(1, 'Pursuit of Happiness'),
(2, 'McDonalds'),
(2, 'KFC'),
(2, 'Starbucks'),
(2, 'Taco Bell'),
(2, 'Red Lobster'),
(2, 'Applebees'),
(2, 'T.Pot'),
(3, 'Lord of the Rings'),
(3, 'Huckleberry Finn'),
(3, 'The Name of the Wind'),
(3, 'Harry Potter'),
(3, 'The Great Gatsby'),
(3, 'Birdwing'),
(3, 'The Stand'),
(4, 'Pen'),
(4, 'Paper'),
(4, 'Plastic'),
(4, 'Pomegranate'),
(4, 'Garbage Bags'),
(4, 'Beats By Dre'),
(4, 'Sneakers'),
(5, 'Do Laundry'),
(5, 'Pickup Prescription'),
(5, 'Call Mom'),
(5, 'Record Show'),
(5, 'Finish Homework'),
(5, 'Drink Water'),
(5, 'Clean Floors'),
(5, 'Recycle Bottles'),
(5, 'Throw Away Garbage'),
(5, 'Call Bank'),
(5, 'Pay Rent'),
(5, 'Finish Writing Letter'),
(5, 'Haircut on Tuesday'),
(5, 'Pickup Sister on Wednesday'),
(5, 'Meet Friend at Mall');
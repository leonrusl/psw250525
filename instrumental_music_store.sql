
-- Create database
CREATE DATABASE IF NOT EXISTS instrumental_music_store;
USE instrumental_music_store;

-- Drop the table if it already exists
DROP TABLE IF EXISTS products;

-- Create products table
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    category VARCHAR(50),
    type VARCHAR(50),
    price DECIMAL(10,2),
    image VARCHAR(255),
    description TEXT
);

-- Insert sample data
INSERT INTO products (name, category, type, price, image, description) VALUES
('Acoustic Vibes', 'Guitar', 'bestseller', 19.99, 'images/acoustic.jpg', 'A relaxing acoustic guitar instrumental perfect for background music.'),
('Piano Serenity', 'Piano', 'new', 14.99, 'images/piano.jpg', 'Beautiful solo piano instrumental for study or relaxation.'),
('Epic Strings', 'Orchestra', 'promo', 9.99, 'images/strings.jpg', 'An epic orchestral piece featuring strings and percussion.'),
('Lo-Fi Chillhop', 'Electronic', 'bestseller', 11.99, 'images/lofi.jpg', 'Lo-fi beats to relax/study to, perfect for chill moments.'),
('Jazz in the Night', 'Jazz', 'new', 13.99, 'images/jazz.jpg', 'Smooth jazz instrumental with sax and piano elements.'),
('Synthwave Dreams', 'Electronic', 'promo', 12.49, 'images/synthwave.jpg', 'Retro-futuristic synthwave vibes with an 80s aesthetic.');

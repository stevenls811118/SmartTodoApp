LHL Midterm Group Project: Smart TODO App
=========
By combining prior experience in Node.js, PSQL, HTML, CSS and API requests with online research, We are expected to build a Smart TODO App using the given node skeleton as a base (https://github.com/lighthouse-labs/node-skeleton).

Users should be able to add the name of a TODO, which the app will then SMART AUTO-CATEGORIZE into one of the following categories:
- Film / Series (To watch)
- Restaurants, cafes, etc. (To eat)
- Books (To read)
- Products (To buy)
- General (If no match)

In order to create the Smart Auto-Categorization feature, various API's will be used to determine the the nature of the TODO inputted while balancing multiple API endpoints.

If the TODO is linked to multiple categories, the user will be able to select the correct category to avoid potential auto-miscategorization.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Install all dependencies: `npm i`
3. Fix to binaries for sass: `npm rebuild node-sass`
4. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
5. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Final Product

### Home Page
!["final-product-gif"](/docs/final-product.gif)
### Add TODO
!["final-product-gif-2](/docs/final-product-add.gif)
### Delete TODO
!["final-product-gif-3](/docs/final-product-delete.gif)

## API's and Features
This project uses 4 API's to find the correct categories for the TODO input:
- Open Movie Database API (Film/Series)
- Yelp Fusion API (Restaurant/Cafes)
- OpenLibrary Book Search API (Books)
- SerpAPI Google Product API (Products)

### User Features:
- Entered string will be referenced by the above API's to find category
- If the TODO is listed under a *singular* category, it will automatically be placed in the correct table
- If the TODO is listed under *multiple* categories, the user will receive a popup with an option to select the correct category
- If the TODO *cannot be found* under any category, the TODO will automatically be placed in the "General" table
- Users are able to edit the name of the TODO after submission
- Users are able to delete TODO's after submission
- Users can re-arrange the TODO's within the same table
- When tables grow large enough, the TODO's container will automatically show a scrollbar with the table list

## Dependencies and API's

### Dependencies
- Axios
- Chalk
- Dotenv
- EJS
- Express
- Google-search-results-nodejs
- Jquery
- Morgan
- PG
- Request
- Sass Middleware
- SweetAlert
- Util

### API's
- Open Movie Database API (API KEY REQUIRED))
- OpenLibrary Book Search API (API KEY NOT REQUIRED)
- SerpAPI Google Products API (API KEY REQUIRED)
- Yelp-Fusion API (API KEY REQUIRED)

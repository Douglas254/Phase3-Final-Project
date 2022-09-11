# Phase 3 Final Project : Blog Posts

## Focus 🎯
Building a Sinatra API backend that uses Active Record to access and persist data in a database, which will be used by a separate React frontend that interacts with the database via the API.

## Learning Goals 👨‍🚀

- Use Active Record to interact with a database.
- Have a minimum of two models with a one-to-many relationship.
- Create API routes in Sinatra that handles at least three different CRUD actions for at least one of your Active Record models.
- Build a separate React frontend application that interacts with the API to perform CRUD actions.
- Use good OO design patterns. You should have separate classes for each of your models, and create instance and class methods as necessary.

## Frontend Setup ✴️

- [x] Clone the repository using `https://github.com/Douglas254/Phase3-Final-Project.git` or download and extract the zip file.
- [x] Open up the cloned folder in your preferred text editor. Open up a terminal within your workspace and navigate into the Phase3-Final-Project folder
- [x] Within that folder `blog-client`, run `npm install` which will install all dependencies for the project and then run `npm start` to get our application running on `http://localhost:3000/`

## Backend Setup ✴️
- [x] cd into blog-client folder and run `bundle install` from your terminal which will install all the gems 
- [x] seed the database with data using cmd `bundle exec rake db:seed` or alternatively you can use `bundle exec rake db:seed:replant` to delete everything in the database and seed it with data to be fetched by an API
- [x] Finally run `bundle exec rake server` to keep your backend running on `http://localhost:9292` :boom:

## Endpoints API 🛠️

✅ Your base URL API for storing posts in SQLite: `http://localhost:9292/posts`

## Core Deliverables 📈

As a user 👨‍💻, I can:

- `C`reate posts
- `R`ead posts
- `U`pdate posts
- `D`elete posts
- Search for posts using search input 👍

## Authors 🖊️

This project was contributed to by:

- [Douglas Obara](https://github.com/douglas254/)

## License 📄

The project is licensed under MIT

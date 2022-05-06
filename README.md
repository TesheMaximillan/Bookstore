![](https://img.shields.io/badge/Microverse-blueviolet)

# Bookstore App

> In this website, I creatde an MVP version of Bookstore App that allows:

    * Display a list of books.
    * Add a book.
    * Remove a selected book.:

## In this project I followed the following requirements

### Phase 1

* Reusable components are created.
* React router are added and setted two `<Route>` and `<Link>` for the app navigation
* Books page is crated and setted as the default view
* BookLists are displayed in the book page
* a book component is created for displaying single book
* A form for adding book is created
* a category page is craeted with a button "Check status" only

### Phase 2

* redux library and react-redux libraries are used.
* Used a feature folder to structure the project.
* Book actions and reducers are written using `ducks pattern`
* categories actions and reducers written using `ducks pattern`
* Redux stores are configured

### Phase 3

* Made states are immutable.
* Initial state is changed by default value.
* Redux provider is imported to the main component (`index.js`)
* App is connected to Redux store
* List of books are displayed in redux store
* Books are added by using `useDispatch` method
* Books are removed by using `useDispatch` method
* Checkstatus functionality is when cattegory button is clicked

### Phase 4

* redux-tunk is added to my project as a middleware.
* I used axios for making API calls.
* Redux provider is imported to the main component (`index.js`)
* book lists are loaded from api when the page is reloaded
* addBook and removeBook features are modified to work with the API

### Phase 5

* I styled the website according to Zeplin's design
* I created common modules like `Card` and `Button` for reusability
* I applied component level styling using `scss`, and imported all of the components into `App.scss` file 
* I applied `useEffect` and `useState` hooks for the circular progress bar and used a random number for the percentage
* App deployed to Heroku
## Technologies

* React
* SCSS

## Live Demo

[Live Demo Link](https://bookstoreteshe.herokuapp.com/)

## Screenshot

![image](https://user-images.githubusercontent.com/51437483/167161514-ddffb713-913c-4eec-af47-4280bc79da4c.png)

## Setup project in your local machine

1. Clone the repository by using `git clone ...`
2. Go to the project directory by using `cd Bookstore`
3. run `npm install` to install the necessary packages
4. run `npm start` to start the project
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Author

👤 **Teshome Kurabachew**

* GitHub: [@githubhandle](https://github.com/TesheMaximillan)
* Twitter: [@twitterhandle](https://twitter.com/TesheKura)
* LinkedIn: [LinkedIn](https://www.linkedin.com/in/teshome-kurabachew-aa8067180/)

## Credential

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/TesheMaximillan/Bookstore/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

* Microverse

## 📝 License

This project is [MIT](./MIT.md) licensed.

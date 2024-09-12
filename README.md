# Movie App 🎬

**Movie App** is a web application built with React and TypeScript, allowing users to browse movies, view details, filter, and sort them. It also includes authentication and the ability to add movies to favorites.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/umurakbulut/movie-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-app
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Start the json server:

   ```bash
   npx json-server --watch db.json --port 3001
   ```

## Usage

Once the app is running, you can:

Browse movies.

- Search for specific movies using the search bar.
- Filter movies by favorites or new additions.
- Sort movies by title, release year, or IMDb rating.
- View detailed information about a selected movie.
- Log in and manage your favorite movies.

## Features

- Authentication: Users can log in to access personalized features.
- Movie Listing: Browse a list of movies fetched from a mock API using JSON Server.
- Search & Filter: Search for movies and filter by favorites or newly added movies.
- Sorting: Sort movies by different criteria such as name, release year, and IMDb rating.
- Favorites Management: Add movies to a favorites list and view the list.

## Technologies

- React: UI development with component-based architecture.
- TypeScript: Static typing to catch errors early and improve code maintainability.
- Redux: State management for authentication, movie listings, and favorites.
- JSON Server: Mock API for movie data.
- Webpack: Module bundler for compiling the project.
- ESLint & Prettier: Linting and formatting tools to maintain code quality.

## Folder Structure

```
movie-app/
│
├── public/                # Public directory
├── src/                   # Source directory
│   ├── components/        # Reusable components
│   │   ├── atoms/         # Small, independent UI elements
│   │   ├── molecules/     # Combination of atoms
│   │   ├── organisms/     # More complex components made up of molecules
│   ├── model/             # Common models and interfaces
│   ├── store/             # Redux store and slices
│   ├── styles/            # Global style files
│   ├── views/             # Page components
│   ├── App.tsx            # Main React component
│   ├── index.tsx          # Entry point of the app
├── .eslintrc.js           # ESLint configuration
├── .babelrc               # Babel configuration
├── .prettierrc            # Prettier configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration
├── webpack.config.js      # Webpack configuration
```

## Scripts

Here are the available scripts for this project:

- Start the development server:

  ```bash
  npm start
  ```

- Build the project:

  ```bash
  npm run build
  ```

- Run ESLint to check for linting errors:

  ```bash
  npm run lint
  ```

- Fix ESLint errors automatically:

  ```bash
  npm run lint:fix
  ```

- Run tests (if applicable):
  ```bash
  npm test
  ```

## Contributing

If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a feature branch `(git checkout -b feature-name)`.
- Commit your changes `(git commit -m 'Add some feature')`.
- Push to the branch `(git push origin feature-name)`.
- Open a Pull Request.
- We welcome all contributions and suggestions!

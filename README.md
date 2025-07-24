# 🎬 Sprint 3 – Movie Management Tool

## 📋 Project Overview

This project is part of the IT Academy's Sprint 3, focusing on building the core logic for a movie management web application. The goal is to implement functions that filter, sort, and analyze a dataset of movies, all of these while passing tests using Jest framework.

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine.
- A code editor like Visual Studio Code.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KevinLarriega98/S3-ITAcademy.git
   cd S3-ITAcademy
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running Tests

To run the test suite and verify your implementations:

```bash
npm run test:watch
```

---

## 🧪 Exercises

#### ✅ Exercise 1: Get All Directors

**Function:** `getAllDirectors(movies)`

**Description:**  
Return an array containing the names of all directors from the movie dataset.

---

#### ✅ Exercise 2: Get Movies from a Specific Director

**Function:** `getMoviesFromDirector(movies, director)`

**Description:**  
Return an array of movies directed by the specified director.

---

#### ✅ Exercise 3: Calculate Average Score of a Director's Movies

**Function:** `moviesAverageOfDirector(movies, director)`

**Description:**  
Calculate and return the average score of all movies directed by the specified director, rounded to two decimal places.

---

#### ✅ Exercise 4: Alphabetical Order of Movie Titles

**Function:** `orderAlphabetically(movies)`

**Description:**  
Return an array of the first 20 movie titles sorted alphabetically.

---

#### ✅ Exercise 5: Order Movies by Year

**Function:** `orderByYear(movies)`

**Description:**  
Return an array of movies sorted by year in ascending order. If two movies have the same year, sort them alphabetically by title.

---

#### ✅ Exercise 6: Average Score by Genre

**Function:** `moviesAverageByCategory(movies, category)`

**Description:**  
Calculate and return the average score of movies in the specified genre, rounded to two decimal places.

---

#### ✅ Exercise 7: Convert Movie Durations to Minutes

**Function:** `hoursToMinutes(movies)`

**Description:**  
Convert the `duration` property of each movie from a string format (e.g., "2h 34min") to an integer representing the total number of minutes.

---

#### ✅ Exercise 8: Best Film of the Year

**Function:** `bestFilmOfYear(movies, year)`

**Description:**  
Return the movie with the highest score from the specified year.
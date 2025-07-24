// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director)

  return result
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director)

  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesFromDirector = getMoviesFromDirector(array, director)

  if (moviesFromDirector.length === 0) return 0

  const totalScore = moviesFromDirector.reduce((sum, movie) => {
    return sum + (movie.score || 0)
  }, 0)

  const average = totalScore / moviesFromDirector.length

  return Number(average.toFixed(2))
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const copiedArray = [...array]

  copiedArray.sort((a, b) => a.title.localeCompare(b.title))

  const titles = copiedArray.map(movie => movie.title)

  return titles.slice(0, 20)
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const copiedArray = [...array]

  copiedArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year
    } else {
      return a.title.localeCompare(b.title)
    }
  })

  return copiedArray
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const filteredMovies = array.filter(movie =>
    movie.genre && movie.genre.includes(category) && typeof movie.score === "number"
  )

  if (filteredMovies.length === 0) return 0

  const totalScore = filteredMovies.reduce((sum, movie) => sum + movie.score, 0)

  const average = totalScore / filteredMovies.length

  return Number(average.toFixed(2))
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  return movies.map(movie => {
    let duration = movie.duration
    let hours = 0
    let minutes = 0

    const hoursMatch = duration.match(/(\d+)h/)
    if (hoursMatch) {
      hours = parseInt(hoursMatch[1])
    }

    const minutesMatch = duration.match(/(\d+)min/)
    if (minutesMatch) {
      minutes = parseInt(minutesMatch[1])
    }

    const totalMinutes = hours * 60 + minutes

    return {
      ...movie,
      duration: totalMinutes
    }
  })
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(moviesArray, year) {
  const moviesFromYear = moviesArray.filter(movie => movie.year === year)
  
  if (moviesFromYear.length === 0) return []

  const bestMovie = moviesFromYear.reduce((best, current) => {
    return current.score > best.score ? current : best
  })

  return [bestMovie]
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

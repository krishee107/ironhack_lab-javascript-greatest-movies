// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let newArr = moviesArray.map(movie => {
       return movie.director;
    })
    const uniqueArr = [...new Set(newArr)];
    return uniqueArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let cont = 0;

    moviesArray.filter((movie) => {
        if(movie.director == "Steven Spielberg" && movie.genre.includes('Drama') )
            cont ++;
    })
    
    return cont;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length == 0) return 0;

    let average = moviesArray.reduce((sum, movie) =>{
        if(!movie.score) return sum;
        return sum+ movie.score;
    }, 0);

    average = (average/ moviesArray.length).toFixed(2);
    console.log(average)
    return Number.parseFloat(average);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length == 0) return 0;
    let dramaCont = 0;

    let average = moviesArray.reduce((sum, movie) =>{
        if(!movie.score) return sum;
        if(movie.genre.includes('Drama')){
            dramaCont ++;
            return sum + movie.score;
        }
        return sum;
    }, 0);

    //No drama
    if(dramaCont <= 0) return 0;

    return Number.parseFloat((average / dramaCont).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //copiar array
    let newArr = Array.from(moviesArray);
    newArr.sort((antes, despues) => {
        //ordenarlo por año ascendente
        if(despues.year < antes.year) return 1;
        if (despues.year > antes.year)return -1;
        if(despues.year == antes.year){
            //por letra
            if(despues.title < antes.title) return 1;
            if(despues.title > antes.title) return -1;
            return 0;
        }
    })

    return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

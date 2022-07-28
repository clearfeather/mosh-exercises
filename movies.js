const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.2},
    { title: 'c', year: 2022, rating: 5.0},
    { title: 'd', year: 2021, rating: 3.0}
];

// All movies in 2018 with rating > 4
// Sort by rating
// Display their title

const best = movies
.filter(m => m.year === 2018 && m.rating >= 4)
.sort((a, b) => a.rating - b.rating)
.reverse()
.map(m => m.title)

console.log(best);
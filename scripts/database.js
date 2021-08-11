/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    entries: [
        // {
        //     "id": 1,
        //     "date": "07/24/2025",
        //     "concept": "HTML & CSS",
        //     "entry": "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        //     "mood": "Eager"
        // },
        // {
        //     "id": 2,
        //     "date": "07/26/2025",
        //     "concept": "Complex Flexbox",
        //     "entry": "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain.",
        //     "mood": "Frustrated"
        // },
        // {
        //     "id": 3,
        //     "date": "07/27/2025",
        //     "concept": "git and github",
        //     "entry": "Felt pretty confused the first time trying to understand how to navigate git and github by using the terminal.",
        //     "mood": "Confused"
        // }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
// const API = "http://localhost:8088"



export const getEntries = () => {
    return fetch("http://localhost:8088/entries")    // Fetch from the API
        .then(res => res.json()) // Parse as JSON
        .then(
            (entries) => {
            // What should happen when we finally have the array?
            entries = database.entries.map(entry => ({ ...entry}))
            console.log(entries)
        })
}


// export const getEntries = () => {
//     const copyOfData = database.entries.map(entry => ({ ...entry }))
//     return copyOfData
// }

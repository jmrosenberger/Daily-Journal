/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    entries: []
}


const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/



export const fetchEntries = () => {
    return fetch(`${API}/entries`)    // Fetch from the API
        .then(response => response.json()) // Parse as JSON
        .then(
            (entries) => {
            // What should happen when we finally have the array?
            database.entries = entries
        })
}


export const getEntries = () => {
    return database.entries.map(entry => ({ ...entry }))
}





export const sendEntry = (userEntry) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEntry)
    }


    return fetch(`${API}/entries`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}




export const deleteEntry = (id) => {
    return fetch(`${API}/entries/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

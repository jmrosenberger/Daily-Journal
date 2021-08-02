/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getEntries } from "./database.js"

export const Entries = () => {
    const entries = getEntries()
    const allEntriesAsHTML = "<section>"


    for (const entry of entries) {
        allEntriesAsHTML += `
                <p>${entry.entry}Test entry</p>
                `
    }
    allEntriesAsHTML += "</section>"

    return allEntriesAsHTML
}

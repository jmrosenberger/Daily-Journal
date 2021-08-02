import { Entries } from "./Entries.js"


// export const DailyJournal = () => {
//     return `
//         <div class="entryList">
//             ${Entries()}
//         </div>
//     `
// }

// Keep your existing imports and add the new import for the form function

export const DailyJournal = () => {
    return `
        <h1>Daily Journal</h1>

        <div class="entryList">
            ${Entries()}
        </div>

        <article class="entryForm">
             Use interpolation to put the HTML that the form function generates here
        </article>
    `
}

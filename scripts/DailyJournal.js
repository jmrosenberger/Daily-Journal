import { Entries } from "./Entries.js"
import { JournalForm } from "./JournalForm.js"
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
        <h1>Journal Entries</h1>
        <article class="entryForm">
        ${ JournalForm() }
        </article>

        <div class="entryList">
            ${ Entries() }
        </div>

    `
}

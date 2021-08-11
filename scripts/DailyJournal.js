import { Entries } from "./Entries.js"
import { JournalForm } from "./JournalForm.js"







export const DailyJournal = () => {
    return `
    <header>
        <h1>My Daily Journal</h1>
        <h4>Joshua Rosenberger</h4>

    </header>
    <article class="entryForm">
    ${JournalForm()}
    </article>
    
    <h1>Journal Entries</h1>
        <div class="entryList">
            ${Entries()}
        </div>

    `
}

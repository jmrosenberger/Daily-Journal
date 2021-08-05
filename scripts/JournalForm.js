// import { DailyJournal } from "./DailyJournal.js"
// import { Entries } from "./Entries.js"





export const JournalForm = () => {
    return `
<h2>Daily Input</h2>
            <form class="entryForm">
                <fieldset>
                    <label for="entryDate">Date:</label>
                    <input type="date" name="entryDate" class="entryForm__date">
                </fieldset>
                <fieldset>
                    <label for="conceptsCovered">Concepts Covered</label>
                    <input type="text" name="conceptsCovered" class="conceptsCoveredForm__input">
                </fieldset>
                <fieldset>
                    <label for="journalEntry">Journal Entry</label>
                    <input type="textArea" name="journalEntry" class="journalEntryForm__input">
                </fieldset>
                <fieldset>
                    <label for="mood">Mood for the day</label>
                    <select name="mood" id="mood">
                        <option value="Happy">Happy</option>
                        <option value="Frustrated">Frustrated</option>
                        <option value="Confused">Confused</option>
                        <option value="Satisfied">Satisfied</option>
                        <option value="Overwhelmed">Overwhelmed</option>
                        <option value="Eager">Eager</option>
                    </select>
                </fieldset>
                <input type="button" onclick="alert('Keep up the good work!')" value="Record Journal Entry">
            </form>
        `
}
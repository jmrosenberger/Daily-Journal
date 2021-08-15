import { sendEntry } from "./database.js"




const mainContainer = document.querySelector("#container")


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitEntry") {
        const userDate = document.querySelector("input[name='entryDate']").value
        const userConceptsCovered = document.querySelector("input[name='conceptsCovered']").value
        const userjournalEntry = document.querySelector("input[name='journalEntry']").value
        const userMood = document.querySelector("select[name='mood']").value


        const dataToSendToAPI = {
            date: userDate,
            concept: userConceptsCovered,
            entry: userjournalEntry,
            mood: userMood
        }
        sendEntry(dataToSendToAPI)
    }
}
)


export const JournalForm = () => {
    let html = `
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
                </form>
                <button class="button" id="submitEntry">Record Journal Entry</button>
        `
        return html
}
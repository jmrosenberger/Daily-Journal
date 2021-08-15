import { DailyJournal } from "./DailyJournal.js"
import { fetchEntries } from "./database.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderAllHTML()
    }
)


const renderAllHTML = () => {
    fetchEntries().then(
        () => {
            mainContainer.innerHTML = DailyJournal()
            
        }
    )
}
renderAllHTML()

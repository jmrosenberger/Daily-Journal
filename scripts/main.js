import { DailyJournal } from "./DailyJournal.js"


const container = document.querySelector("#container")


export const renderAllHTML = () => {
    container.innerHTML = DailyJournal()
}
renderAllHTML()

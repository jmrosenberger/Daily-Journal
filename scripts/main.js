import { DailyJournal } from "./DailyJournal.js"


const container = document.querySelector("#entries")


export const renderAllHTML = () => {
    container.innerHTML = DailyJournal()
}
renderAllHTML()

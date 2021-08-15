/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getEntries, deleteEntry } from "./database.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    click => {
        if (click.target.id.startsWith("entry--")) {
            const [, entryId] = click.target.id.split("--")
            deleteEntry(parseInt(entryId))
        }
    }
)



const listEntries = (entry) => {
    return `
    <li class="entry__list">
    <h4>${entry.date} -||- ${entry.concept}</h4>
             <div>   
              <p>${entry.entry}</p>
                    <button class="entry__delete"
                                id="entry--${entry.id}">
                            Delete Entry
                    </button>
            </div>
            </li>
        `
}







export const Entries = () => {
    const entries = getEntries()
    let html = `
        <ul class="entry__container">
            
            ${entries.map(listEntries).join("")}
        </ul>
    `

    return html

}

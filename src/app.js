export function rendernotes(notes){
    let newnote = notes.map(({id , title , note , isPinned ,isArchived}) => {
        return (
            `
            <div class="single-note relative shadow bg-amber-400 border border-black ">
            <div class="d-flex align-center title-container">
            <span class="single-note-title">${title}</span>
            </div>
            <br>
            <p>${note}</p>
            <div class="options d-flex gap-md">
            <button class="button btn pinned-btn v-hidden" data-type = "pinned" data-id = ${id}>
                 <span class=${isPinned ? "material-icons" : "material-icons-outlined"} data-type = "pinned" data-id = ${id}>
                 push_pin
                 </span>
            </button>
            <button class="button btn pinned-btn v-hidden " data-type = "archive" data-id = ${id}>
                  <span class="material-icons-outlined m-1" data-type = "archive" data-id = ${id} >
                  archive
                  </span>
            </button>
            <button class="button del-btn"data-type = "del" data-id = ${id}>
                  <span class="material-icons-outlined m-1" data-type = "del" data-id = ${id}>
                  delete
                  </span>
            </button>
            </div>
         </div>`
        )
    })
    newnote = newnote.join("")
    return newnote;
}



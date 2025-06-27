import { rendernotes } from "./app.js";    

let note = document.querySelector(".note");
let title = document.querySelector(".title");
let addbutton  = document.querySelector(".button1");
let notesdisplay  = document.querySelector(".notes-display");
let othernotes  = document.querySelector(".notes-container");
let pinnednotes  = document.querySelector(".pinned-notes-container");
let pintext = document.querySelector(".pin-title");
let othertext = document.querySelector(".other-title");




let arrayofnotes = JSON.parse(localStorage.getItem("notes")) || [] ;


addbutton.addEventListener("click", () => {
    if(title.value.trim() === "" && note.value.trim() === ""){
        alert("Please enter a title and note");
    }
    else{
        arrayofnotes = [...arrayofnotes, {
            id: Date.now(),
            title: title.value.trim(),
            note: note.value.trim(),
            isPinned: false,
            isArchived: false
        }]
        note.value = title.value = "";
        othernotes.innerHTML = rendernotes(arrayofnotes.filter(({isPinned , isArchived}) => !isPinned && !isArchived));
        pinnednotes.innerHTML = rendernotes(arrayofnotes.filter(({isPinned}) => isPinned));
        
        // Show/hide section titles based on content
        if (arrayofnotes.filter(({isPinned}) => isPinned).length > 0) {
            pintext.classList.remove("d-none");
        } else {
            pintext.classList.add("d-none");
        }

        if (arrayofnotes.filter(({isPinned, isArchived}) => !isPinned && !isArchived).length > 0) {
            othertext.classList.remove("d-none");
        } else {
            othertext.classList.add("d-none");
        }
        
        localStorage.setItem("notes", JSON.stringify(arrayofnotes));
    }
})



notesdisplay.addEventListener("click", (event) => {
    let type = event.target.dataset.type
    let noteid = event.target.dataset.id
    switch(type){
        case "del" :
            arrayofnotes = arrayofnotes.filter(function(note){
                return note.id.toString() !== noteid
            });
            othernotes.innerHTML = rendernotes(arrayofnotes.filter(({isPinned , isArchived}) => !isPinned && !isArchived))
            pinnednotes.innerHTML = rendernotes(arrayofnotes.filter(({isPinned}) => isPinned))
            
            // Show/hide section titles based on content
            if (arrayofnotes.filter(({isPinned}) => isPinned).length > 0) {
                pintext.classList.remove("d-none");
            } else {
                pintext.classList.add("d-none");
            }

            if (arrayofnotes.filter(({isPinned, isArchived}) => !isPinned && !isArchived).length > 0) {
                othertext.classList.remove("d-none");
            } else {
                othertext.classList.add("d-none");
            }
            
            localStorage.setItem("notes", JSON.stringify(arrayofnotes));
            break;
        case "pinned" : 
            arrayofnotes = arrayofnotes.map(function(note) {
                if(note.id.toString() === noteid){
                    note.isPinned = !note.isPinned
                    return note;
                } else {
                    return note;
                }
            })
            othernotes.innerHTML = rendernotes(arrayofnotes.filter(({isPinned , isArchived}) => !isPinned && !isArchived))
            pinnednotes.innerHTML = rendernotes(arrayofnotes.filter(({isPinned}) => isPinned))
            
            // Show/hide section titles based on content
            if (arrayofnotes.filter(({isPinned}) => isPinned).length > 0) {
                pintext.classList.remove("d-none");
            } else {
                pintext.classList.add("d-none");
            }

            if (arrayofnotes.filter(({isPinned, isArchived}) => !isPinned && !isArchived).length > 0) {
                othertext.classList.remove("d-none");
            } else {
                othertext.classList.add("d-none");
            }
            
            localStorage.setItem("notes", JSON.stringify(arrayofnotes));
            break;
        case "archive" :
            arrayofnotes = arrayofnotes.map(function(note) {
                if(note.id.toString() === noteid){
                    note.isArchived = !note.isArchived
                    return note;
                } else {
                    return note;
                }
            })
            othernotes.innerHTML = rendernotes(arrayofnotes.filter(({isPinned , isArchived}) => !isPinned && !isArchived))
            pinnednotes.innerHTML = rendernotes(arrayofnotes.filter(({isPinned , isArchived}) => isPinned && !isArchived))
            
            // Show/hide section titles based on content
            if (arrayofnotes.filter(({isPinned}) => isPinned).length > 0) {
                pintext.classList.remove("d-none");
            } else {
                pintext.classList.add("d-none");
            }

            if (arrayofnotes.filter(({isPinned, isArchived}) => !isPinned && !isArchived).length > 0) {
                othertext.classList.remove("d-none");
            } else {
                othertext.classList.add("d-none");
            }
            
            localStorage.setItem("notes", JSON.stringify(arrayofnotes));
            break;
    }
})
othernotes.innerHTML = rendernotes(arrayofnotes.filter(({isPinned , isArchived}) => !isPinned && !isArchived))
pinnednotes.innerHTML = rendernotes(arrayofnotes.filter(({isPinned}) => isPinned))

// Show/hide section titles based on content
if (arrayofnotes.filter(({isPinned}) => isPinned).length > 0) {
    pintext.classList.remove("d-none");
} else {
    pintext.classList.add("d-none");
}

if (arrayofnotes.filter(({isPinned, isArchived}) => !isPinned && !isArchived).length > 0) {
    othertext.classList.remove("d-none");
} else {
    othertext.classList.add("d-none");
}

import { rendernotes } from "./app.js" ;

let archivecontainer = document.querySelector(".archive-notes-container")

let arrayofnotes = JSON.parse(localStorage.getItem("notes")) || [] ;

archivecontainer.innerHTML = rendernotes(arrayofnotes.filter(note => note.isArchived));

archivecontainer.addEventListener("click",(event)=> {
    let type = event.target.dataset.type
    let noteid = event.target.dataset.id
    switch(type){
        case "del":
            arrayofnotes = arrayofnotes.filter(function(note){
                return note.id.toString() !== noteid
            });
            archivecontainer.innerHTML = rendernotes(arrayofnotes.filter(note => note.isArchived));
            localStorage.setItem("notes" ,JSON.stringify(arrayofnotes));
            break;
    
        case "archive" : 
        
        arrayofnotes = arrayofnotes.map(function(note){
            if(note.id.toString() === noteid){
                note.isArchived = !note.isArchived
                return note
            }
            else{
                return note ;
            }
        })
        archivecontainer.innerHTML = rendernotes(arrayofnotes.filter(({isArchived}) =>isArchived))
        localStorage.setItem("notes" ,JSON.stringify(arrayofnotes));

        break;
        }

    
})





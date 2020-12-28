const fs = require('fs');
const chalk = require('chalk');
//const { time } = require('console');


const addNote = (title, body) => {
   const notes = loadNotes();

   const duplicateNote = notes.find((note) => note.title === title)
   debugger
   if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("New note added");
   }else{
       console.log('Note title taken');
   } 
} 

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
    try{
        const dataJSON = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note Removed!'));
    }else{
        console.log(chalk.red.inverse('No Note found!'));
    }
   
    //console.log(title + " Removed")
}

const listNotes= () => {    
    const notes = loadNotes();
    console.log(chalk.inverse.blue("Your Notes"));
    // const dataJSON = fs.readFileSync('notes.json').toString();
    // const data = JSON.parse(dataJSON);
    notes.forEach(note => {
        console.log(note.title);
    });
    
}

const readNotes =(title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title == title )
    if (note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("Note not found"));
    }
}

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}

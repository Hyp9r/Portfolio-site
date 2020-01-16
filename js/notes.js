const fs = require('fs');

const getNotes = () => {
    const notes = loadNotes();
    notes.forEach((element) => {
        console.log(element.title + ":" + element.body);
        console.log("==============");
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find( (note) => note.title === title);
    if(noteToRead){
        console.log(noteToRead.title + "=" + noteToRead.body);
    }else{
        console.log("Note does not exist");
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find( (note) => note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
    } else {
        console.log("Note title taken!");
    }

    
}

const removeNote = (title) => {
    const allNotes = loadNotes();
    const notes = allNotes.filter( (note) => note.title !== title);
    
    saveNotes(notes);
    if(allNotes.length !== notes.length){
        console.log("Note has been removed");
    }else{
        console.log("No notes with this title exist");
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        let dataBuffer = fs.readFileSync('notes.json');
        let dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    getNotes: getNotes,
    readNote: readNote
};
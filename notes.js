const fs = require('fs')
const chalk=require('chalk');
const { debug } = require('console');
debugger
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote=notes.find(note=>note.title===title )
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("note saved")

    }
    else {
        console.log('note title taken')
    }


}
const saveNotes = notes => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)

}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        dataString = dataBuffer.toString()
        return JSON.parse(dataString)

    } catch (e) {
        return []
    }
}
const removeNote = title => {
    const notes = loadNotes()
    let found = notes.findIndex(note => note.title === title );
    if (found > -1) {
        notes.splice(found, 1)
        saveNotes(notes)
        console.log(`note with title ${title} removed`)
    }
    else
        console.log(`note with title ${title} note exist`)
}
const listNotes=()=>{
    console.log(chalk.green.inverse('your Notes!'))
    const notesList=loadNotes()
   notesList.forEach(note => {
       console.log(note.title)
   });
}
const readNote=title=>{
    const notes=loadNotes()
    const found=notes.find(note=>{
       return  note.title===title

    })
   // console.log(found)

    if(found){
       console.log(chalk.green.inverse(`title -${found.title}`))
       console.log(chalk.blue.inverse(`body -${found.body}`))
    }
    else{
        console.log(chalk.red.inverse(`note with title ${title} not found`))
    }

}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
}

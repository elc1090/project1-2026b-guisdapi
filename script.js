const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');
const searchId = document.getElementById('search');

showNotes();

function addNotes(){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        notes = [];
    }else{
        notes = JSON.parse(notes);
    }

    if(addText.value == ''){
        alert('Add your note');
        return;
    }
    
    const dataAtual = new Date();
    const noteObj = {
        title: addTitle.value,
        text: addText.value,
        date: dataAtual.toLocaleString()
    }
    addTitle.value = '';
    addText.value = '';
    notes.push(noteObj);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

function showNotes(){
    let notesHTML = '';
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    for(let i=0; i<notes.length; i++){
        notesHTML += `<div class="note">
                    <button class="deleteNote" id=${i} onclick="deleteNote(${i})">Delete</button>
                    <span class="title"><strong style="font-size: 20px;">${notes[i].title === "" ? 'Note' : notes[i].title}</strong></span>
                    <div class="text">${notes[i].text}</div>
                    <span style="font-size: 12px; color: gray;">${notes[i].date}</span>
                    <button class="editNote" id=${i} onclick="editNote(${i})">Edit</button>
                </div>
        `
    }
    notesDiv.innerHTML = notesHTML;
}

function editNote(ind) {
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    addTitle.value = notes[ind].title;
    addText.value = notes[ind].text;
    deleteNote(ind);
}

function deleteNote(ind){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    notes.splice(ind, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

function searchNotes(){
    let textoBusca = searchId.value.toLowerCase();
    let notas = document.getElementsByClassName('note');

    for (let i = 0; i < notas.length; i++) {
        if (notas[i].innerText.toLowerCase().includes(textoBusca)) {
            notas[i].style.display = "block";
        } else {
            notas[i].style.display = "none";
        }
    }
}

addNoteButton.addEventListener('click', addNotes);
searchId.addEventListener('input', searchNotes);
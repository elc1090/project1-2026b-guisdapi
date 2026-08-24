const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');
const searchId = document.getElementById('search');

// criação banco de dados indexedDB
let db;

const request = indexedDB.open('NotesAppDB', 1); // nome do banco de dados e versão

// evento disparado se o banco não existir ou a versão mudar (criação da estrutura)
request.onupgradeneeded = function(event) {
    db = event.target.result;
    
    // cria o "Object Store" (como se fosse uma tabela) chamado 'notes'
    // keyPath com autoIncrement cria um ID único e automático para cada nota
    if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
    }
};

// evento disparado quando o banco abre com sucesso
request.onsuccess = function(event) {
    db = event.target.result;
    console.log("Banco de dados aberto com sucesso!");
    
    // chama showNotes
    showNotes(); 
};

// evento disparado se houver erro ao abrir o banco de dados
request.onerror = function(event) {
    console.error("Erro ao abrir o banco de dados:", event.target.errorCode);
};

function addNotes(){
    if (addText.value == "") {
        alert('Add your note');
        return;
    }

    const dataAtual = new Date();
    const noteObj = {
        title: addTitle.value,
        text: addText.value,
        date: dataAtual.toLocaleString()
    }

    const transaction = db.transaction(['notes'], 'readwrite');
    const store = transaction.objectStore('notes');
    const request = store.add(noteObj);

    request.onsuccess = function() {
        addTitle.value = '';
        addText.value = '';
        //limpa os campos de input
        showNotes(); 
    };

    request.onerror = function() {
        console.error("Erro ao salvar a nota.");
    };
}

function showNotes(){
    let notesHTML = '';

    const transaction = db.transaction(['notes'], 'readonly');
    const store = transaction.objectStore('notes');
    const request = store.getAll();

    request.onsuccess = function(event) {
        const notes = event.target.result; // array que contém todas as notas do banco de dados

        for(let i = 0; i < notes.length; i++) {            
            notesHTML += `<div class="note">
                        <button class="deleteNote" id=${notes[i].id} onclick="deleteNote(${notes[i].id})">Delete</button>
                        <button class="editNote" id=${notes[i].id} onclick="editNote(${notes[i].id})">Edit</button>
                        <span class="title"><strong style="font-size: 20px;">${notes[i].title === "" ? 'Note' : notes[i].title}</strong></span>
                        <div class="text">${notes[i].text}</div>
                        <div style="font-size: 12px; color: gray; text-align: right; margin-top: 10px;">${notes[i].date}</div>
                    </div>
            `
        }
        notesDiv.innerHTML = notesHTML;
    };

    request.onerror = function() {
        console.error("Erro ao buscar as notas.");
    };
}




function editNote(id) {
    const transaction = db.transaction(['notes'], 'readonly');
    const store = transaction.objectStore('notes');
    const request = store.get(id);

    request.onsuccess = function(event) {
        const note = event.target.result;
        
        if (note) {
            addTitle.value = note.title;
            addText.value = note.text;
            deleteNote(id);
        }
    };

    request.onerror = function() {
        console.error("Erro ao buscar a nota para edição.");
    };    
}

function deleteNote(id){
    const transaction = db.transaction(['notes'], 'readwrite');
    const store = transaction.objectStore('notes');
    const request = store.delete(id); // vai deletar a nota com o ID fornecido

    request.onsuccess = function() {
        showNotes(); // atualiza a lista de notas após a exclusão
    };

    request.onerror = function() {
        console.error("Erro ao deletar a nota.");
    };
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
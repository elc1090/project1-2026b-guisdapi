# Projeto: Remake de aplicação web simples

<img width="1280" height="646" alt="demo (1)" src="https://github.com/user-attachments/assets/7e12fdf6-872e-44ca-ac1d-910a1bbeb644" />


## Acesso

https://elc1090.github.io/project1-2026b-guisdapi/

## Desenvolvedor(a)

* Nome: Guilherme Serafini Dapieve
* Curso: Sistemas da Informação

## App original

### Links

- https://thebarunkumar.github.io/my-notes-app/
- https://github.com/thebarunkumar/my-notes-app

### Descrição

O aplicativo original é um bloco de notas simples em formato web ("My Notes App") desenvolvido por TheBarunKumar. O projeto base permite que o usuário adicione novas notas e as exclua, possuindo uma interface escura (dark mode) rudimentar. O código original foi construído com HTML, CSS e JavaScript, focado principalmente na manipulação direta do DOM. Para garantir que as anotações não sumissem ao recarregar a página, a versão original utilizava a Web Storage API (localStorage) de forma síncrona, armazenando os objetos das notas em um array convertido para string via JSON.

## Demanda do(a) cliente

### Cliente

Carlos Eduardo Veloso Correa

### Demanda

Edição de Notas Existentes

Campo de Busca e Filtro de Notas

Registro de Data e Hora de Criação/Edição

## Desenvolvimento

### Processo

Busquei entender o código lendo e analisando os arquivos originais.

Para realizar as demandas obtive auxílio de IA para entender a tecnologia, os novos termos, como funcionava o que eu não havia visto ainda.

As demandas foram tranquilas de implementar, foram necessárias pequenas mudanças no código de JavaScript e a criação de uma função para fazer a pesquisa de notas e outra para a edição.

Como demandas adicionais, tive a demanda de trocar o localStorage pelo indexedDB e a demanda de modernizar o design da página.

Precisei entender o que era o localStorage e como o JavaScript atuava junto disso. Tive que entender como implementar o indexedDB também e refatorar as funções pré-existentes de adicionar, mostrar e remover notas.

Na parte de design, o que mais foi alterado foi o style.css, juntamente com algumas animações no layout feitas com JavaScript. O efeito de fundo borrado também foi aplicado com CSS e JavaScript.

### Trechos de código

Criação do banco de dados:

```
let db;

const request = indexedDB.open('NotesAppDB', 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
  
    if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
    }
};
```

Acessar dados do banco de dados

```
    const transaction = db.transaction(['notes'], 'readonly');
    const store = transaction.objectStore('notes');
    const request = store.getAll();

    request.onsuccess = function(event) {
        const notes = event.target.result;
        ...

```

SVG: Scalable Vector Graphics (Gráficos vetoriais escaláveis)

```
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>

```

## Tecnologias

### Linguagens e afins

- HTML
- CSS
- JavaScript

### Ambiente de desenvolvimento

- VS Code
- Gemini

## Referências e créditos

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/)
- Gemini
- Google Fonts

---

Projeto entregue para a disciplina de [Desenvolvimento de Software para a Web](http://github.com/andreainfufsm/elc1090-2026b) em 2026b

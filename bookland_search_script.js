// Book Data:

var book1Author = "Author: Thomas Mann";
var book1Title = "Title: Death in Venice";
var book1Description = "Description: One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self.";

var book2Author = "Author: James Joyce";
var book2Title = "Title: A Portrait of the Artist as a Young Man";
var book2Description = "Description: This book is a fictional re-creation of the Irish writer's own life and early environment. The experiences of the novel's young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character.";

var book3Author = "Author: E. M. Forster";
var book3Title = "Title: A Room With a View";
var book3Description = "Description: This work displays an unusually perceptive view of British society in the early 20th century.It is a social comedy set in Florence, Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling against straitlaced Victorian attitudes of arrogance, narroe mindedness and sobbery, falls in love - while on holiday in Italy - with the socially unsuitable George Emerson.";

var book4Author = "Author: Isabel Allende";
var book4Title = "Title: The House of Spirits";
var book4Description = "Description: Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main  historical events of the time, up until Pinochet's dictatorship.";

var book5Author = "Author: Isabel Allende";
var book5Title = "Title: Of Love and Shadows";
var book5Description = "Description: The whole world of Irene Beltran, a young reporter in Chile at the time of the dictatorship, is destroyed when she discovers a series of killings carried out by government soldiers. With the help of a photographer, Francisco Leal, and risking her life, she tries to come up with evidence against the dictatorship.";

// Search Function:

function runTheSearch() {
	var statementToPrint = "Not Found";
	var workingAuthor = document.getElementById("authorName").value;
    var workingTitle = document.getElementById("bookTitle").value;
    workingAuthor = "Author: "+workingAuthor;
    workingTitle = "Title: "+workingTitle
    //Check for entry:
    if (workingAuthor == book1Author) {
    	statementToPrint = book1Author + "\n" + book1Title + "\n" + book1Description;
    }
    else if (workingAuthor == book2Author) {
    	statementToPrint = book2Author + "\n" + book2Title + "\n" + book2Description;
    }
    else if (workingAuthor == book3Author) {
    	statementToPrint = book3Author + "\n" + book3Title + "\n" + book3Description;
    }
    else if (workingAuthor == book4Author && workingTitle == book4Title) {
    	statementToPrint = book4Author + "\n" + book4Title + "\n" + book4Description;
    }
    else if (workingAuthor == book5Author && workingTitle == book5Title) {
    	statementToPrint = book5Author + "\n" + book5Title + "\n" + book5Description;
    }
    else if (workingAuthor == book4Author) {
    	statementToPrint = book4Author + "\n" + book4Title + "\n" + book4Description + "\n" + "\n" + book5Author + "\n" + book5Title + "\n" + book5Description;
    }
    else if (workingAuthor == book5Author) {
    	statementToPrint = book5Author + "\n" + book5Title + "\n" + book5Description + "\n" + "\n" + book4Author + "\n" + book4Title + "\n" + book4Description;
    }
    else {
    	statementToPrint = statementToPrint;
    }
    // Print to box:
    document.getElementById("bookInfoBox").value = statementToPrint;
}
console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];


var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  let $sectionTag = document.createElement("section");
  $sectionTag.id = ("middle-earth");

  // add each land as an article tag
  let $shireTag = document.createElement("article");
  $shireTag.className = ("shire");
  let $rivendellTag = document.createElement("article");
  $rivendellTag.className = ("rivendell");
  let $mordorTag = document.createElement("article");
  $mordorTag.className = ("mordor");
  
  // inside each article tag include an h1 with the name of the land
  let $sh1Tag = document.createElement("h1");
  let $rh1Tag = document.createElement("h1");
  let $mh1Tag = document.createElement("h1");

  let $shire = document.createTextNode(lands[0]);
  let $rivendell = document.createTextNode(lands[1]);
  let $mordor = document.createTextNode(lands[2]);

  $shireTag.appendChild($sh1Tag);
  $rivendellTag.appendChild($rh1Tag);
  $mordorTag.appendChild($mh1Tag);

  $sh1Tag.appendChild($shire);
  $rh1Tag.appendChild($rivendell);
  $mh1Tag.appendChild($mordor);

  // append middle-earth to your document body
  body.appendChild($sectionTag);
  body.appendChild($shireTag);
  body.appendChild($rivendellTag);
  body.appendChild($mordorTag);

}

makeMiddleEarth();

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  let $hobbitsList = document.createElement("ul");
  
  hobbits.forEach(function(hobbit){
    let $listedHobbit = document.createElement("li");
     // give each hobbit a class of hobbit
    $listedHobbit.className = ("hobbit");
    $listofHobbit = document.createTextNode(hobbit);
    $listedHobbit.appendChild($listofHobbit);
    $hobbitsList.appendChild($listedHobbit);
    $hobbitsList.className = ("hobbit-list");
    let $shireTag = document.querySelector(".shire");
    $shireTag.appendChild($hobbitsList);
  });
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  let $theRing = document.createElement("div");
  $theRing.id= ("the-ring");

  // give the div a class of 'magic-imbued-jewelry'
  $theRing.className = (".magic-imbued-jewelry")

  // add the ring as a child of Frodo
  document.querySelector(".hobbit:first-child").appendChild($theRing);

  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  $theRing.addEventListener("click", function(e){
    nazrulScreech();
  });
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  let $asideTag = document.createElement("aside");

  // attach an unordered list of the 'buddies' in the aside
  let $buddiesList = document.createElement("ul");

  buddies.forEach(function(buddy){
    let $listedbuddy = document.createElement("li");
    let $listofBuddies = document.createTextNode(buddy);

    $listedbuddy.className = ("buddies");

    $listedbuddy.appendChild($listofBuddies);
    $buddiesList.appendChild($listedbuddy);
    $asideTag.appendChild($buddiesList);

    // insert your aside as a child element of rivendell
    document.querySelector(".rivendell").appendChild($asideTag);
  });
  
}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  let $striderPos = document.querySelector(".buddies:nth-child(4)");
  $striderPos.innerHTML = "";
  let $strider = document.createTextNode("Aragorn");
  $striderPos.appendChild($strider);
  
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $hobbits = document.querySelector(".hobbit-list")
  document.querySelector(".rivendell").appendChild($hobbits);
}

leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  let $fellow = document.createElement("div");
  $fellow.id = ("the-fellowship");
  document.querySelector(".rivendell").appendChild($fellow);

  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  $fellow.appendChild(document.querySelector(".hobbit:nth-child(1)"));
  // alert("Frodo has joined the fellowship");
  $fellow.appendChild(document.querySelector(".hobbit:nth-child(2)"));
  // alert("Merry has joined the fellowship");
  $fellow.appendChild(document.querySelector(".hobbit:first-child"));
  // alert("Sam has joined the fellowship");
  $fellow.appendChild(document.querySelector(".hobbit:last-child"));
  // alert("Pippin has joined the fellowship");
}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  let $gandalfPos = document.querySelector(".buddies:first-child");
  $gandalfPos.innerHTML = "";
  let $gandalf = document.createTextNode("Gandalf the White");
  $gandalfPos.appendChild($gandalf);

  // apply style to the element
  // make the background 'white', add a grey border
  $gandalfPos.style.backgroundColor = "white";
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // alert("Horn of gandalf has been blown!");

  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  document.querySelector(".buddies:last-child").style.textDecoration = "line-through"
  
  // Remove Boromir from the Fellowship
  document.querySelector(".buddies:last-child").remove();
}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  let $mordor = document.querySelector(".mordor")
  $mordor.appendChild(document.querySelector(".hobbit:first-child"));
  $mordor.appendChild(document.querySelector(".hobbit:nth-child(2)"));

  // add a div with an id of 'mount-doom' to Mordor
  let $doom = document.createElement("div");
  $doom.id = ("mount-doom");
  $mordor.appendChild($doom);
}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  let $gollum = document.createElement("div");
  $gollum.id = ("gollum");
  document.querySelector(".mordor").appendChild($gollum);

  // Remove the ring from Frodo and give it to Gollum
  $gollum.appendChild(document.querySelector("#the-ring"));

  // Move Gollum into Mount Doom
  document.querySelector("#mount-doom").appendChild($gollum);
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  document.querySelector("#gollum").remove();

  // remove all the baddies from the document


  // Move all the hobbits back to the shire
  document.querySelector("#the-fellowship").appendChild(document.querySelector(".mordor li"));
  document.querySelector("#the-fellowship").appendChild(document.querySelector(".mordor li"));
  document.querySelector(".shire").appendChild(document.querySelector("#the-fellowship"));

}

thereAndBackAgain();

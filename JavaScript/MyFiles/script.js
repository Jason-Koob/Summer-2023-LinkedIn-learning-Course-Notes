
import thingBox from "./thingBox.js";
import SuitCase from "./suitCase.js";
import book from "./books.js";

// // OBJECTs
const lunchBox = {
    sandwich: "Turkey",
    chipNum: 17,
    juiceBox: true,
    color: "red",
    snack: "Beef Jerky",
    fruit: "Banana",
    extraContents: {
      noteFromMom: "Luv ya -Momma",
    },

// METHOD
    drinkJuiceBox: function (juiceBox) {
        this.juiceBox = juiceBox;
    },
    NewNoteFromMom: function (noteFromMom) {
      this.noteFromMom = noteFromMom;
  }
};

// USING A CLASS TO MAKE A NEW OBJECT
const toolBox = new thingBox(
    "toolBox",
    "hammer",
    "screwdriver",
    "nails",
    "screws",
    false,
    "red",
);

// console.log(toolBox.item1)

// console.log(toolBox.isOpen)
// toolBox.toggleOpen(true)
// console.log(toolBox.isOpen)

// USING A CONSTRUCTOR TO MAKE A OBJECT
const mySuitCase = new SuitCase(
  "My suit case",
  "shirt",
  "pants",
  "shoes",
  false,
)

// console.log(mySuitCase.name)
// console.log(mySuitCase.isOpen)
// mySuitCase.toggleOpen(true)
// console.log(mySuitCase.isOpen)

const TheArtofDeception = new book(
  "The Art of Deception: Controlling the Human Element of Security",
  "Mitnick, Kevin D.; Simon, William L.",
  691,
  347,
  "9780471237129",
  false
)

// console.log(TheArtofDeception)

const content = `
<main>
  <h2>Books</h2>
  <ul>
    <li>Title: ${TheArtofDeception.title}</li>
    <li>Author: ${TheArtofDeception.author}</li>
    <li>Total Pages: ${TheArtofDeception.pageTotal}</li>
    <li>Current Pages: ${TheArtofDeception.pageCurrent}</li>
    <li>ISBN #: ${TheArtofDeception.ISBN}</li>
    <li>Completion Status: ${TheArtofDeception.completeStatus}</li>
  </ul>
<h1 class="swag">Hello World</h1>
</main>
`;

// ADDING A DOM OBJECT TO HTML VIA CLASSES
const main = document.querySelector(".maincontent")

const newArticle = document.createElement("main")
newArticle.classList.add(".article")
newArticle.setAttribute("id", "id_attrib")

// newArticle.innerHTML = content;

main.append(newArticle)

// ARRAYS
let list = ["dog", "cat", "horse", "alligator"];

// console.log(list)

const count = 
  list.forEach(function (item) {
    if (item.length > 3) {
      // console.log(item);
    }
  })

// FUNCTIONS
function doMath (a = 5, b = 3) {
  
  let c = a + b;
  let d = a * c;
  let e = d / c;

  // console.log(c)
  // console.log(d)
  // console.log(e)
}

// console.log(doMath(17, 15))

// PASSING DATA BETWEEN FUNCTIONS

const passw0rd = (mother, school, date) => {
  let passwd = date + mother + school;
  return passwd
}

const userLogin = (nameF, nameL, doB) => {
  let userName = nameF + nameL + doB
  let passwd = passw0rd("Lori", "Broadway", "7-27")

  // console.log("Your username is: ", userName);
  // console.log("Your password is: ", passwd);

  return userName;
}

// userLogin("Jason", "Spears", "091802")

// EVENT LISTENERS
const button = document.querySelector("button")

function buttonFunction () {
  console.log("Your username is: ",userLogin("Jason", "Spears", "091802"))

}

button.addEventListener("click", buttonFunction, false)
// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "./res/elsa.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "./res/mia.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "lexi lore",
    job: "intern",
    img:
      "./res/lexi.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const   img = document.getElementById("person-img"),
        author = document.querySelector("h4.author"),
        job = document.getElementById("job"),
        info = document.querySelector("p#info"),

        prevBtn = document.querySelector(".prev-btn"),
        nextBtn = document.querySelector(".next-btn"),
        randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0,
    logItem;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
})

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  
  showPerson(currentItem);
})

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
})

randomBtn.addEventListener("click", () => {
  currentItem = getRandomInt(reviews);
  console.log("currentItem = " + currentItem);
  showPerson(currentItem);
})

//show a person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

function getRandomInt(array) {
  logItem = Math.floor(Math.random() * array.length);
  while (logItem == currentItem) {
    logItem = Math.floor(Math.random() * array.length);
  } 
  return logItem;
}
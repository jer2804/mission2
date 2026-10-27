// ----- HTML ELEMENTS -----

// Gets all ten recommendation cards
const cards = document.querySelectorAll(".card");

// Gets the popup and the elements inside it
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");

// Gets the buttons and trailer link
const closePopup = document.getElementById("closePopup");
const trailerLink = document.getElementById("trailerLink");
const previousCard = document.getElementById("previousCard");
const nextCard = document.getElementById("nextCard");

// Keeps track of which card is currently open
let currentCard = 0;

// ----- ANIME TRAILERS -----

// Stores the YouTube links for the five anime
// Each link is in order of the anime cards
const trailers = [
  "https://www.youtube.com/results?search_query=Re+Zero+official+trailer",
  "https://www.youtube.com/results?search_query=Mushoku+Tensei+official+trailer",
  "https://www.youtube.com/results?search_query=Steins+Gate+official+trailer",
  "https://www.youtube.com/results?search_query=Wistoria+Wand+and+Sword+official+trailer",
  "https://www.youtube.com/results?search_query=Tokyo+Ghoul+official+trailer",
];

// ----- STORY DETAILS -----

// Extra information for all ten cards
// Each object contains the genre, story and main characters
// The order matches the cards in HTML

const storyDetails = [
  {
    genre: "Fantasy, Psychological, Drama",
    story:
      "Subaru Natsuki is suddenly transported to another world, where he discovers that dying sends him back to an earlier point in time. However, he cannot freely control when he returns, and nobody else remembers the events he experienced.",
    characters: "Subaru Natsuki, Emilia, Rem, Ram, Beatrice",
  },
  {
    genre: "Fantasy, Adventure, Isekai",
    story:
      "A man is reincarnated into a fantasy world as Rudeus Greyrat, retaining memories of his previous life. Determined to make the most of his second chance, he learns magic, forms relationships and travels through a world filled with different cultures and dangers.",
    characters:
      "Rudeus Greyrat, Roxy Migurdia, Sylphiette, Eris Boreas Greyrat",
  },
  {
    genre: "Sci-Fi, Thriller, Mystery",
    story:
      "Rintaro Okabe and his friends accidentally discover a way to send messages into the past. What begins as a strange experiment becomes increasingly dangerous as their actions change the timeline and attract unwanted attention.",
    characters: "Rintaro Okabe, Kurisu Makise, Mayuri Shiina, Itaru Hashida",
  },
  {
    genre: "Fantasy, Action, Adventure",
    story:
      "Will Serfort attends a prestigious magic academy despite being unable to use magic himself. Instead, he relies on his swordsmanship and determination as he works towards reaching the top of the magical world.",
    characters:
      "Will Serfort, Elfaria Albis Serfort, Colette Loire, Sion Ulster",
  },
  {
    genre: "Dark Fantasy, Action, Horror",
    story:
      "Ken Kaneki is an ordinary university student whose life changes after an encounter leaves him caught between the human world and the world of ghouls, creatures that survive by consuming human flesh.",
    characters:
      "Ken Kaneki, Touka Kirishima, Rize Kamishiro, Hideyoshi Nagachika",
  },
  {
    genre: "Action, Fantasy, Regression",
    story:
      "Kim Gong-ja is a low-ranking hunter who gains an unusual ability connected to death. He begins climbing a mysterious tower while encountering other hunters, difficult challenges and people whose stories change his outlook.",
    characters: "Kim Gong-ja, Raviel Ivansia, Black Dragon Witch",
  },
  {
    genre: "Comedy, Fantasy, Adventure",
    story:
      "Kim Suho wakes up in the body of Lloyd Frontera, a nobleman's son from a novel he once read. Using his knowledge of engineering and construction, he attempts to improve his family's situation while getting involved in increasingly ridiculous adventures.",
    characters: "Lloyd Frontera, Javier Asrahan",
  },
  {
    genre: "Cultivation, Fantasy, Comedy",
    story:
      "Han Jue begins his journey in a cultivation world with one main goal: survive. Rather than rushing into dangerous battles, he prefers to train quietly and become stronger while the world continues changing around him.",
    characters: "Han Jue",
  },
  {
    genre: "Fantasy, Action, Adventure",
    story:
      "Kim Dokja is the only person who finished reading a web novel called Three Ways to Survive in a Ruined World. When the events of the novel suddenly become reality, he uses his knowledge of the story to survive dangerous scenarios and change the fate of the people around him.",
    characters: "Kim Dokja, Yoo Joonghyuk, Han Sooyoung, Yoo Sangah",
  },
  {
    genre: "Sci-Fi, Action, Mecha, Cultivation",
    story:
      "After returning to the past, the protagonist uses his knowledge of future events to prepare for the dangers ahead. The story combines futuristic technology, powerful mechs, cultivation and battles as he works to change humanity's future.",
    characters: "Various pilots, allies and opponents",
  },
];

// ----- OPEN POPUP -----

function openPopup(card) {
  // Gets the image, title and paragraphs from the clicked card
  const image = card.querySelector("img");
  const title = card.querySelector("h3");
  const paragraphs = card.querySelectorAll("p");

  // Finds which card was clicked and remembers its position
  const cardNumber = Array.from(cards).indexOf(card);
  currentCard = cardNumber;

  // ----- CARD INFORMATION -----

  // Copies the card's image and title into the popup
  popupImage.src = image.src;
  popupImage.alt = image.alt;
  popupTitle.textContent = title.textContent;

  // ----- PERSONAL DESCRIPTION -----

  // Clears the previous description before adding a new one
  popupDescription.innerHTML = "";

  // Copies each paragraph from the clicked card into the popup
  paragraphs.forEach(function (paragraph) {
    popupDescription.innerHTML += paragraph.outerHTML;
  });

  // ----- EXTRA STORY INFORMATION -----

  // Gets the matching story information from the array
  const story = storyDetails[cardNumber];

  // Finds the HTML section where the extra details will appear
  const details = document.getElementById("storyDetails");

  // Displays the genre, story and characters inside the popup
  details.innerHTML =
    "<p><strong>Genres:</strong> " +
    story.genre +
    "</p>" +
    "<p>" +
    story.story +
    "</p>" +
    "<p><strong>Main Characters:</strong> " +
    story.characters +
    "</p>";

  // ----- ANIME TRAILERS -----
  // Shows the trailer link for anime and hides it for manhwa
  if (cardNumber < 5) {
    trailerLink.href = trailers[cardNumber];
    trailerLink.classList.remove("hidden");
  } else {
    trailerLink.classList.add("hidden");
  }

  // ----- DISPLAY POPUP -----
  // Removes the hidden class so the popup becomes visible
  popup.classList.remove("hidden");
}

// ----- CARD CLICK EVENTS -----

// Goes through all ten cards and gives each one a click event
cards.forEach(function (card) {
  // Opens the popup when a card is clicked
  card.addEventListener("click", function () {
    openPopup(card);
  });
});

// ----- CLOSE POPUP -----

// Closes the popup when the X button is clicked
closePopup.addEventListener("click", function () {
  popup.classList.add("hidden");
});

// Closes the popup when clicking the dark background
popup.addEventListener("click", function (event) {
  // Checks that the background was clicked, not the content
  if (event.target === popup) {
    popup.classList.add("hidden");
  }
});

// ----- PREVIOUS AND NEXT BUTTONS -----

// Opens the previous card
previousCard.addEventListener("click", function () {
  // Stops the button from going before the first card
  if (currentCard > 0) {
    openPopup(cards[currentCard - 1]);
  }
});

// Opens the next card
nextCard.addEventListener("click", function () {
  // Stops the button from going past the last card
  if (currentCard < cards.length - 1) {
    openPopup(cards[currentCard + 1]);
  }
});

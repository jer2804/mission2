// ----- HTML ELEMENTS -----

const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const closePopup = document.getElementById("closePopup");
const trailerLink = document.getElementById("trailerLink");
const previousCard = document.getElementById("previousCard");
const nextCard = document.getElementById("nextCard");

let currentCard = 0;

// ----- ANIME TRAILERS -----

const trailers = [
  "https://www.youtube.com/results?search_query=Re+Zero+official+trailer",
  "https://www.youtube.com/results?search_query=Mushoku+Tensei+official+trailer",
  "https://www.youtube.com/results?search_query=Steins+Gate+official+trailer",
  "https://www.youtube.com/results?search_query=Wistoria+Wand+and+Sword+official+trailer",
  "https://www.youtube.com/results?search_query=Tokyo+Ghoul+official+trailer",
];

// ----- STORY DETAILS -----

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
  const image = card.querySelector("img");
  const title = card.querySelector("h3");
  const paragraphs = card.querySelectorAll("p");

  const cardNumber = Array.from(cards).indexOf(card);
  currentCard = cardNumber;

  popupImage.src = image.src;
  popupImage.alt = image.alt;
  popupTitle.textContent = title.textContent;

  // ----- PERSONAL DESCRIPTION -----

  popupDescription.innerHTML = "";

  paragraphs.forEach(function (paragraph) {
    popupDescription.innerHTML += paragraph.outerHTML;
  });

  // ----- EXTRA STORY INFORMATION -----

  const story = storyDetails[cardNumber];

  const details = document.getElementById("storyDetails");

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

  if (cardNumber < 5) {
    trailerLink.href = trailers[cardNumber];
    trailerLink.classList.remove("hidden");
  } else {
    trailerLink.classList.add("hidden");
  }

  popup.classList.remove("hidden");
}

// ----- CARD CLICK EVENTS -----

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    openPopup(card);
  });
});

// ----- CLOSE POPUP -----

closePopup.addEventListener("click", function () {
  popup.classList.add("hidden");
});

popup.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.classList.add("hidden");
  }
});

// ----- PREVIOUS AND NEXT BUTTONS -----

previousCard.addEventListener("click", function () {
  if (currentCard > 0) {
    openPopup(cards[currentCard - 1]);
  }
});

nextCard.addEventListener("click", function () {
  if (currentCard < cards.length - 1) {
    openPopup(cards[currentCard + 1]);
  }
});

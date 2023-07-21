const feelings = [
  "Happy",
  "Sad",
  "Angry",
  "Excited",
  "Anxious",
  "Frustrated",
  "Nervous",
  "Content",
  "Grateful",
  "Worried",
  "Relaxed",
  "Confused",
  "Inspired",
  "Loved",
  "Jealous",
  "Hopeful",
  "Overwhelmed",
  "Guilty",
  "Bored",
  "Curious",
];

const entrySuggestions = [
  "What are three things you are grateful for today?",
  "What are your top five values in life and how do they guide your decisions?",
  "Describe a challenge you recently faced and how you overcame it.",
  "What are your biggest dreams and aspirations?",
  "Reflect on a recent accomplishment that made you proud.",
  "How do you define success, and what steps are you taking to achieve it?",
  "Write about a person who has had a significant impact on your life and why.",
  "What are three things you would like to improve about yourself and why?",
  "Describe a time when you took a risk and what you learned from the experience.",
  "Write about a book or movie that has influenced you and why.",
  "What are your favorite ways to practice self-care and why?",
  "Reflect on a time when you felt completely in your element and describe the experience.",
  "Write about a difficult decision you had to make and how you came to your conclusion.",
  "What are your short-term and long-term goals? How do they align with your values?",
  "Describe a place that brings you peace and tranquility. Why does it have that effect on you?",
  "Reflect on a recent failure or setback and what you learned from it.",
  "Write about a skill or hobby you would like to develop and why it interests you.",
  "What are your favorite ways to overcome stress or adversity?",
  "Describe a person you admire and the qualities that you find inspiring.",
  "Write about a time when you felt completely out of your comfort zone and what you gained from the experience.",
  "What are your favorite ways to express creativity and why?",
  "Reflect on a lesson you learned from a past mistake.",
  "Write about a meaningful friendship in your life and what makes it special.",
  "Describe a time when you felt deeply connected to nature and why it resonated with you.",
  "What are your favorite ways to practice mindfulness and be present in the moment?",
  "Reflect on a time when you received valuable feedback and how it influenced your growth.",
  "Write about a personal value or belief that has changed over time and the reasons behind the change.",
  "What are your favorite ways to give back to your community or make a positive impact?",
  "Describe a goal or dream that you have achieved and how it has impacted your life.",
  "Reflect on a time when you had to forgive someone and the healing it brought.",
  "Write about a place you have always wanted to visit and why it intrigues you.",
  "What are your favorite ways to practice self-reflection and introspection?",
  "Describe a lesson you learned from a difficult relationship or conflict.",
  "Reflect on a time when you felt a sense of deep gratitude and appreciation.",
  "Write about a personal habit or routine that brings structure to your day and why it is important to you.",
  "What are your favorite ways to recharge and rejuvenate your energy?",
  "Describe a time when you received unexpected kindness and how it affected you.",
  "Reflect on a goal or dream that you have yet to pursue and the steps you can take to get closer to it.",
  "Write about a lesson you learned from a difficult loss or failure.",
  "What are your favorite ways to foster positivity and optimism in your life?",
  "Describe a mentor or role model who has positively influenced your personal or professional development.",
  "Reflect on a time when you had to step out of your comfort zone and the growth it brought.",
  "Write about a personal strength or talent that you are proud of and how it enhances your life.",
  "What are your favorite ways to cultivate inner peace and serenity?",
  "Describe a time when you made a difficult ethical decision and the reasoning behind your choice.",
  "Reflect on a time when you had to confront a fear and the lessons you learned from facing it.",
];

let entriesArray = [];


let idCounter = 0;

const feelingsContinue_btn = document.getElementById("feelingsContinue_btn");
const addTitle_div = document.getElementById("addTitle_div");
const feelings_div = document.getElementById("feelings_div");
const MakeYourOwn_btn = document.getElementById("MakeYourOwn_btn");
const ownEntryTitleInput = document.getElementById("ownEntryTitleInput");
const ownTitleWrapper = document.getElementById("ownTitleWrapper");
const suggestionWrapper = document.getElementById("suggestionWrapper");
const writingEntryTitle_div = document.getElementById("writingEntryTitle_div");
const howAreYouFeeling_div = document.getElementById("howAreYouFeeling_div");
const writingEntry_div = document.getElementById("writingEntry_div");
const continueWithOwn_btn = document.getElementById("continueWithOwn_btn")
const entry_textArea = document.getElementById("entry_textArea");
const addPhotoInput = document.getElementById("addPhotoInput");
const sumbitEntry_btn = document.getElementById("sumbitEntry_btn");


feelingsContinue_btn.addEventListener("click", feelingsContinue_btn_Handle);
MakeYourOwn_btn.addEventListener("click", makeOwnTitleOpen);
continueWithOwn_btn.addEventListener("click",(x) => 
{
  if (ownEntryTitleInput.value.length <2 ){
    return alert("Entry title is too short, please try again.")
  }
  continueToWritingDiv(ownEntryTitleInput.value)
})
sumbitEntry_btn.addEventListener("click", newEntrySubmit)



createFeelingsButtons();

function createFeelingsButtons() {
  let html = "";
  for (i = 0; i < feelings.length; i++) {
    html += ` <button onclick="changeSelected(${i})" id="feeling-Button-${i}" class="btn m-1 feelingRemove">${feelings[i]}</button>`;
  }
  feelings_div.innerHTML = html;
}

function feelingsContinue_btn_Handle() {
  let suggestion = entrySuggestions[getRandomInt(0, entrySuggestions.length)];

  suggestionWrapper.innerHTML = `
  <h1>Lets add a title</h1>
  <h5>Were here to suggest you a journal entry question, as they are a great starting point. todays suggestion:</h5>
  <p class="fs-3">
      ${suggestion}
  </p>
  <button class="btn bg-UV text-light" onclick="continueToWritingDiv('${suggestion}')">continue with suggestion</button>
   <br>
   <h5>or</h5>
  `;
  addTitle_div.classList.remove("d-none");
  feelings_div.classList.add("d-none")
}

function changeSelected(i) {
  let buttonToChange = document.getElementById("feeling-Button-" + i);

  if (buttonToChange.classList.contains("feelingRemove")) {
    buttonToChange.classList.remove("feelingRemove");
    buttonToChange.classList.add("feelingAdd");
    buttonToChange.classList.add("shadow");
  } else if (buttonToChange.classList.contains("feelingAdd")) {
    buttonToChange.classList.remove("feelingAdd");
    buttonToChange.classList.remove("shadow");
    buttonToChange.classList.add("feelingRemove");
  }
}

function getCheckedButtons() {
  let selectedFeelings = [];
  for (i = 0; i < feelings.length; i++) {
    let check = document.getElementById("feeling-Button-" + i);
    if (check.classList.contains("feelingAdd")) {
      selectedFeelings.push(feelings[i]);
    }
  }
  return selectedFeelings;
}

function makeOwnTitleOpen() {
  ownTitleWrapper.classList.remove("d-none");
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function keepOnlyWritingDiv() {
  addTitle_div.classList.add("d-none");
  howAreYouFeeling_div.classList.add("d-none");
  writingEntry_div.classList.remove("d-none");
}

function showTitleInWritingDiv(title) {
  writingEntryTitle_div.innerText =`${title}`;
}

function continueToWritingDiv(title) {
  keepOnlyWritingDiv();
  showTitleInWritingDiv(title);
}




class JournalEntry {
  constructor(title = writingEntryTitle_div.innerText, entry = entry_textArea.value, feelings = getCheckedButtons(),  ){
    this.title = title;
    this.entry = entry;
    this.feelings = feelings;
    this.id = idCounter++;
    this.createdAt = new Date;
  }
}

function newEntrySubmit(){
  let entry = new JournalEntry
 if(localStorage.getItem("entries")){
  entriesArray = JSON.parse(localStorage.getItem("entries"))
  entriesArray.push(entry)
  localStorage.setItem("entries",JSON.stringify(entriesArray))
 } else {
  entriesArray[0] = entry
  localStorage.setItem("entries" ,JSON.stringify(entriesArray) )
}
console.log(localStorage.getItem("entries"));
}


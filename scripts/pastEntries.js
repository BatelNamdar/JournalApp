const feelings2 = [
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
  

const showaAllEntries_div = document.getElementById("showaAllEntries_div");
const searchInEntry_btn = document.getElementById("searchInEntry_btn")
const searchInEntry_input = document.getElementById("searchInEntry_input");
const feelingSelect = document.getElementById("feelingSelect")


if (localStorage.getItem("entries")) {
    renderPastEntries(getEntriesArray())
  
}

createSelectFeelings()

searchInEntry_btn.addEventListener("click", searchBtnHandle )
feelingSelect.addEventListener("change", (event) => {
    renderPastEntries(findEntryByFeelings(event.target.value))
    if(event.target.value === 'none'){

    }
});



function createSelectFeelings(){
    let html = ` <option value="none">none</option>`
    for(i=0;i<feelings2.length;i++){
        html += `<option value="${feelings2[i]}">${feelings2[i]}</option>`
    }
    feelingSelect.innerHTML = html
}


function getEntriesArray(){
    return JSON.parse(localStorage.getItem("entries"))
}

function renderPastEntries(array) {
    let html = ``;
  
  
    entriesArray = array;
  
    for (i = 0; i < array.length; i++) {
      html += `
       <div class="row justify-content-center bg-UV m-4 rounded p-3">
                  <div class="col-12 bg-isa rounded shadow my-2 p-2">
                      <h3 class="w-50 mr-5 d-inline">${array[i].title}</h3>
                      <h5 class="w-50 mt-3 ">${array[i].displayedDate}</h5>
                      
                          <p class="w-100 fs-4 my-4">
                          ${entriesArray[i].entry}
                          <p>
                      
                         <p class="fs-5 color-UV w-75 m-0">    
                          ${getFeelingsString(i)}
                          </p>
                          
                  </div>
                  <div class="col-sm-8  ">
                      <button class="btn bg-pale w-100 h-100">Edit entry</button>
                  </div>
          </div>
       `;
      
    }
  
    showaAllEntries_div.innerHTML = html;
}

function doesInclude(string){
    let arrayToCheck = getEntriesArray()
    let arrayToReturn = []
    for(i=0;i <arrayToCheck.length ;i++){
        if(arrayToCheck[i].entry.includes(string)){
            arrayToReturn.push(arrayToCheck[i])
        }
    }    
   
    return arrayToReturn
}

function findEntryByFeelings(feeling){
    let arrayToCheck = getEntriesArray()
    let arrayToReturn = []
    for(i=0;i <arrayToCheck.length ;i++){
        if(arrayToCheck[i].feelings.includes(feeling)){
            arrayToReturn.push(arrayToCheck[i])
        }
    }    
   
    return arrayToReturn
}

function searchBtnHandle(){
    renderPastEntries(doesInclude(searchInEntry_input.value))
}




function getFeelingsString(i) {
  let feelingsBefore = entriesArray[i].feelings;
  let stringToReturn = `${feelingsBefore[0]}`;
  for (i = 1; i < feelingsBefore.length; i++) {
    stringToReturn += `, ${feelingsBefore[i]}`;
  }
  return stringToReturn + ".";
}


const showaAllEntries_div = document.getElementById("showaAllEntries_div");

if (localStorage.getItem("entries")) {
  showPastEntries();
}

function getArrayNoSort() {}
function showPastEntries(array) {
  let html = ``;
  let parsed = JSON.parse(localStorage.getItem("entries"));

  entriesArray = parsed;

  for (i = 0; i < entriesArray.length; i++) {
    html += `
     <div class="row justify-content-center bg-UV m-4 rounded p-3">
                <div class="col-6 bg-isa rounded shadow my-2 p-2">
                    <h3 class="w-50 mr-5 d-inline">${entriesArray[i].title}</h3>
                    
                        <p class="w-100 fs-4 my-4">
                        ${entriesArray[i].entry}
                        <p>
                    
                    <p class="fs-5 color-UV w-75 m-0">
                        
                        ${getFeelingsString(i)}
                        </p>
                        
                </div>
                <div class="col-2">
                    <button class="btn bg-pale w-100 h-100">Edit entry</button>
                </div>
        </div>
     `;
    console.log(entriesArray[i].entry);
  }

  showaAllEntries_div.innerHTML = html;
}

function getFeelingsString(i) {
  let feelingsBefore = entriesArray[i].feelings;
  let stringToReturn = `${feelingsBefore[0]}`;
  for (i = 1; i < feelingsBefore.length; i++) {
    stringToReturn += `, ${feelingsBefore[i]}`;
  }
  return stringToReturn + ".";
}

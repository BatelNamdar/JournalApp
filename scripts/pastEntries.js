const showaAllEntries_div = document.getElementById("showaAllEntries_div")

let entriesArray = []
showPastEntries()
function showPastEntries(){
    const alwaysAdd = 
    `
    <div class="row justify-content-center bg-UV m-4 rounded p-3">
            
    <div class="col-4 text-center">
        <i class="bi bi-search text-light"></i>
      <input type="text" class=" w-75">
    </div>
    <div class="col-4 text-center">
        <a href="/pages/newEntry.html">

            <button class="btn bg-isa">Add new entry</button>
        </a>
    </div>
    </div>
    `;
    let html =''
    entriesArray = JSON.parse(localStorage.getItem("entries"))
    for(i=0;i<entriesArray,length;i++){
     html += 
     `
     <div class="row justify-content-center bg-UV m-4 rounded p-3">
                <div class="col-6 bg-isa rounded shadow my-2 p-2">
                    <h3 class="w-50 mr-5 d-inline">${entriesArray[i].title}</h3>
                    <h6 dir="rtl" class="w-25 d-inline">${toLocaleTimeString(entriesArray[i].createdAt)}</h6>
                        <p class="fs-4 color-UV w-50 m-0">
                        ${getFeelingsString(i)}
                        </p>
                        
                </div>
                <div class="col-1">
                    <button class="btn bg-pale w-100 h-100">Edit entry</button>
                </div>
        </div>
     `   
    }

    showaAllEntries_div.innerHTML = alwaysAdd + html;
}

function getFeelingsString(i){
let feelingsBefore = entriesArray[i].feelings
let stringToReturn =''
for(i=0;i<feelingsBefore.length;i++){
    stringToReturn += feelingsBefore[i]
}
return stringToReturn
}
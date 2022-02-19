let resultName = "";
let resultEmail = "";

const allNames = ["Abdul Hadi", "Abdullah Al Noman", "Abdullah Imran Hriday", "Abu Hanif", "Anjan Chakraborty", "Arafat Hossain", "Ariful Islam", "Asif Iqbal Palash", "Faruq Hasan", "Farzana Smrity", "Kashpiya Amina", "Monsurul Alam", "Najnin Sultana", "Nurun Nabi", "Sakhawat Hossain", "Shagatam Mutsuddy", "Shahariar Shaown", "Zainal Abedin"];

const allEmails = ["183003022e@eastdelta.edu.bd", "183002922e@eastdelta.edu.bd", "183001622e@eastdelta.edu.bd", "183002422e@eastdelta.edu.bd", "183002622e@eastdelta.edu.bd", "183001722e@eastdelta.edu.bd", "183000222e@eastdelta.edu.bd", "183000822e@eastdelta.edu.bd", "183002022e@eastdelta.edu.bd", "183002122e@eastdelta.edu.bd", "183000422e@eastdelta.edu.bd", "183002522e@eastdelta.edu.bd", "183000522e@eastdelta.edu.bd", "183000622e@eastdelta.edu.bd", "183002722e@eastdelta.edu.bd", "183001422e@eastdelta.edu.bd", "183002322e@eastdelta.edu.bd", "183000322e@eastdelta.edu.bd"];


const personContainer = document.getElementById("person-container");

function loadUser(name, email) {
    const personDetails = document.createElement("div");
    personDetails.classList.add("col-xl-3", "col-lg-4", "col-md-6", "col-sm-12");
    personDetails.innerHTML = `
    <div class="person shadow rounded rounded-2 p-3 my-3">
        <div class="row">
            <h5 class="person-name">${name}</h5>
            <p class="person-email">${email}</p>
        </div>
        <div class="location-info">
            <small>Chittagong</small>
            <small>Now: Chittagong</small>
        </div>
    </div>
    `;
    personContainer.appendChild(personDetails);
}

function loadNoUser() {
    const personDetails = document.createElement("div");
    personContainer.innerHTML = ``;
    personContainer.appendChild(personDetails);
}

function loadAllUser() {
    for(let i=0; i<allNames.length; i++ ){
        let userName = allNames[i];
        let userEmail = allEmails[i];
        loadUser(userName, userEmail);
    }
}


function searchPerson() {
    
    let searchFieldValue = document.getElementById("searchText").value;
    let searchValue = searchFieldValue.toLowerCase();
    if(searchValue == ""){
        loadNoUser();
        loadAllUser();
    }
    else{
        loadNoUser();
        for(let i=0; i<allNames.length; i++){

            if(allNames[i].toLowerCase().includes(searchValue) || allEmails[i].toLowerCase().includes(searchValue)){
                resultName = allNames[i];
                resultEmail = allEmails[i];
                loadUser(resultName, resultEmail);
            }
        }
    }
}

document.onload = loadAllUser();
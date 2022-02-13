let resultName = "";
let resultEmail = "";

const personInfo = [
    {name: "Abdul Hadi", email: "183003022e@eastdelta.edu.bd"},
    {name: "Abdullah Al Noman", email: "183002922e@eastdelta.edu.bd"},
    {name: "Abdullah Imran Hriday", email: "183001622e@eastdelta.edu.bd"},
    {name: "Abu Hanif", email: "183002422e@eastdelta.edu.bd"},
    {name: "Anjan Chakraborty", email: "183002622e@eastdelta.edu.bd"},
    {name: "Arafat Hossain", email: "183001722e@eastdelta.edu.bd"},
    {name: "Ariful Islam", email: "183000222e@eastdelta.edu.bd"},
    {name: "Asif Iqbal Palash", email: "183000822e@eastdelta.edu.bd"},
    {name: "Faruq Hasan", email: "183002022e@eastdelta.edu.bd"},
    {name: "Farzana Smrity", email: "183002122e@eastdelta.edu.bd"},
    {name: "Kashpiya Amina", email: "183000422e@eastdelta.edu.bd"},
    {name: "Monsurul Alam", email: "183002522e@eastdelta.edu.bd"},
    {name: "Najnin Sultana", email: "183000522e@eastdelta.edu.bd"},
    {name: "Nurun Nabi", email: "183002722e@eastdelta.edu.bd"},
    {name: "Shagatam Mutsuddy", email: "183001422e@eastdelta.edu.bd"},
    {name: "Shahariar Shaown", email: "183002322e@eastdelta.edu.bd"},
    {name: "Zainal Abedin", email: "183000322e@eastdelta.edu.bd"},
];

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
    for(var person of personInfo ){
        userName = person.name;
        userEmail = person.email
        loadUser(userName, userEmail);
    }
}


function searchPerson() {
    
    var searchValue = document.getElementById("searchText").value;
    if(searchValue == ""){
        loadAllUser();
    }
    else{
        loadNoUser()
        for(let i=0; i<personInfo.length; i++){

            if(personInfo[i].name.includes(searchValue) || personInfo[i].email.includes(searchValue)){
                resultName = personInfo[i].name;
                resultEmail = personInfo[i].email;
                loadUser(resultName, resultEmail);
            }
        }
    }
}

document.onload = loadAllUser();
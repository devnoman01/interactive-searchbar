const allNames = document.querySelectorAll('.person-name');
var personNames = [];
for(const name of allNames){
    personNames.push(name.innerHTML);
}
const allEmails = document.querySelectorAll('.person-email');
var personEmails = [];
for(const email of allEmails){
    personEmails.push(email.innerHTML);
}


function searchPerson() {
    var searchValue = document.getElementById('searchText').value;
    // console.log(searchValue);
    for(let i=0; i<personNames.length;i++){
        
        if(personNames[i].includes(searchValue, 0)){
            if(searchValue!=''){
                console.log(personNames[i]);
            }
        
        }
        else{
            continue;
        }
        // console.log(personNames[i]);
        // if(i==5){
        //     break;
        // }
        // if(name.includes(searchValue)){
        //     console.log('found name');
        // }
    }
}
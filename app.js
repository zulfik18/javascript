const api_url = "https://restcountries.com/v2/all";

countriesData(api_url);

//Define async function
async function countriesData (url){
    //storing response
    const response = await fetch(url);
    //store data in JSON
    var data = await response.json();
    if (response){
        hideloader();
    }
    show(data);
}

//search function to filter table
function searchFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("Countries");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

//function to hide loader
function hideloader(){
    document.getElementById('loading').style.display = 'none';
}

//function to define innerHTML for table
function show(data){
let tableList = `<tr>
    <th>Name</th>
    <th>Region</th>
    <th>Capital</th>
    <th>Flag</th></tr>`;

    //loop for access all rows
    for (let r of data){
        tableList += `<tr>
        <td>${r.name}</td>
        <td>${r.region}</td>
        <td>${r.capital}</td>
        <td>${r.flag}</td></tr>`;
    }
   //setting innerHTML as table variable       
   document.getElementById("Countries").innerHTML = tableList;
}



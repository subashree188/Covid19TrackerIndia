/*{"ID":"dc841a7f-c94f-487b-a248-34b756684c12","Country":"India","CountryCode":"IN","Slug":"india",
"NewConfirmed":186364, "TotalConfirmed":27555457,"NewDeaths":3660,"TotalDeaths":318895,
"NewRecovered":259459,"TotalRecovered":24893410,"Date":"2021-05-28T09:12:34.998Z","Premium":{}}*/
async function apicall(){
    
    var url = "https://api.covid19api.com/summary";
    var response = await fetch(url);
    var data = await response.json();

    document.getElementById("todayCases").innerHTML = data.Countries[76].NewConfirmed;
    document.getElementById("todayDeaths").innerHTML = data.Countries[76].NewDeaths;
    document.getElementById("todayRecoveries").innerHTML = data.Countries[76].NewRecovered;

    document.getElementById("totalCases").innerHTML = data.Countries[76].TotalConfirmed;
    document.getElementById("totalDeaths").innerHTML = data.Countries[76].TotalDeaths;
    document.getElementById("totalRecoveries").innerHTML = data.Countries[76].TotalRecovered;

    var currentDate = new Date();
    var time = currentDate.toLocaleTimeString();
    //alert(time);
    document.getElementById("updatedOn").innerHTML = "Last Updated: "+data.Countries[76].Date.slice(0,10)+" "+time;

    
    //document.getElementById("country").innerHTML = data.Countries[76].Country;
    //alert("Country:" +data.Countries[76].Country);
    //alert("Cases Today:" +data.Countries[76].NewConfirmed);
    //alert("Deaths Today:" +data.Countries[76].NewDeaths);
    //alert("Recovered Today:" +data.Countries[76].NewRecovered);

}

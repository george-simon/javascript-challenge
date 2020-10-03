// from data.js
var tableData = data,
    submit = d3.select("#filter-btn"), // select the submit button
    tbody = d3.select("tbody");



// click handler
const runEnter = submit.on("click", function() {

    // keep the page from refreshing
    d3.event.preventDefault();

    // select input and get results
    var inputElement = d3.select("#datetime")

    // get the value of the input
    var inputValue = inputElement.property("value");
    
    console.log(inputValue)
    
    // // use the inputValue to filter on the data set
    var filtereddata = tableData.filter(date => date.datetime === inputValue);
    
    console.log(filtereddata);
    // console.log(filtereddata[0].datetime);

    if (filtereddata[0].datetime === inputValue) { 
        // var filtereddata = tableData.filter(date => date.datetime === inputValue);
        filtereddata.forEach(function(UFOdata) { // loop through data and console log each object
            // console.log(UFOdata);
            var row = tbody.append("tr") // add tr table elements to html
    
            Object.entries(UFOdata).forEach(function([key, value]){ // loop through and console log key value pars
                // console.log(key, value);
    
                var cell = tbody.append("td"); // add td table elements to html
                cell.text(value); // attach value to td table elements
            });
        });
    }
    else {
        // display ALL the data
        tableData.forEach(function(UFOdata) { // loop through data and console log each object
            // console.log(UFOdata);
            var row = tbody.append("tr") // add tr table elements to html
        
            Object.entries(UFOdata).forEach(function([key, value]){ // loop through and console log key value pars
                // console.log(key, value);
        
                var cell = tbody.append("td"); // add td table elements to html
                cell.text(value); // attach value to td table elements
            });
        });
    }

    

});

// // detecting enter key for input submission
// // https://stackoverflow.com/questions/7060750/detect-the-enter-key-in-a-text-input-field
// const node = document.getElementsByClassName("input")[0];
// node.addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         runEnter
//     }
// });
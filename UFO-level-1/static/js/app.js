// from data.js
var tableData = data,
    submit = d3.select("#filter-btn"), // select the submit button
    tbody = d3.select("tbody"),
    form = d3.select("#form");

// loop through provide data to show UFO siting data
tableData.forEach(function(data) { // loop through data and console log each object
    // console.log(UFOdata);
    var row = tbody.append("tr") // add tr table elements to html

    Object.entries(data).forEach(function([key, value]){ // loop through and console log key value pars
        // console.log(key, value);

        var cell = tbody.append("td"); // add td table elements to html
        cell.text(value); // attach value to td table elements
    });
});

// click handler
const runEnter = () => {

    // keep the page from refreshing
    d3.event.preventDefault();

    // select input and get results
    var inputElement = d3.select("#datetime")

    // get the value of the input
    var inputValue = inputElement.property("value");

    console.log(inputValue)

    // use the inputValue to filter on the data set
    var filtereddata = tableData.filter(date => date.datetime === inputValue);

    console.log(filtereddata);

    // removes the rows previously inputed or at least I thought it would
    tbody.selectAll("tr").remove();

    filtereddata.forEach(function(UFOdata) { // loop through data and console log each object
        // console.log(UFOdata);
        var row = tbody.append("tr") // add tr table elements to html

        Object.entries(UFOdata).forEach(function([key, value]){ // loop through and console log key value pars
            // console.log(key, value);

            var cell = tbody.append("td"); // add td table elements to html
            cell.text(value); // attach value to td table elements
        });
    });

};

form.on("submit", runEnter);
submit.on("click", runEnter);

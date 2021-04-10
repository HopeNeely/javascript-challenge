var data = data

var tbody = d3.select("tbody")


var button = d3.select("#button")

var searchform = d3.select("#form")

button.on("click", runEnter)
searchform.on("submit", runEnter)

function runEnter() {
    d3.event.preventDefault()

    var searchInputElement = d3.select('#table-search-input')

    var searchDateValue = searchInputElement.property('value')

    var filteredData = data.filter(sighting => sighting.datetime === searchDateValue)

    console.log(filteredData)

    // // ---- Table ----

    tbody.html("")

    // loop through `data` and add table data to tbody
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr")
        Object.entries(ufoSighting).forEach(function ([key, value]) {
            row.append('td').text(value)

        })
    })
}





// Add for with date option and search button to filter form data by date
// var dateField = d3.select("#input-field")

// dateField.on("change", () => {
//     var newDate = d3.event.target.value;
//     // console.log(newDate);
    // on this event listend we want this to search the table by date.

//   });


// code for new ufo sightings form  




// // clear the existing output
// output.html("")

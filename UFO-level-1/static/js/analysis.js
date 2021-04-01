var tbody = d3.select("tbody")

// loop through `data`
data.forEach(function(ufoSightings) {
    var row = tbody.append("tr")
    Object.entries(ufoSightings).forEach(function([key, value]){
        row.append('td').text(value)
    })
})

d3.select("button").on("click", function() {
    // on this event listend we want this to search the table by date.
})
// // clear the existing output
// output.html("")

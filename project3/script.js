var ausCase = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/australia/aut_case_data_rev.csv"
var ausDeath = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/australia/aut_death_data_rev.csv"
var amznHigh = "https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/amzn/amzn_high_data_rev.csv"

 function ausCases() {
    Plotly.d3.csv(ausCase, function(err, rows){
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
        }
        
        var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'Austrailia Cases',
        x: unpack(rows, 'Dates'),
        y: unpack(rows, 'Case'),
        line: {color: "blue"}
        }
    
        var data = [t1];
        var layout = {
        title: {
            text : 'Austrailia COVID-19 Cases'
        },
        xaxis: {
            title : {
            text : 'Dates' 
            }
        } ,
        yaxis : {
            title : {
            text : 'Cases'
            }
        }
        };    
        Plotly.newPlot('myChart', data, layout);
    })
}

function ausDeaths() {
    Plotly.d3.csv(ausDeath, function(err, rows){
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
        }
        
        var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'Austrailia Deaths',
        x: unpack(rows, 'Dates'),
        y: unpack(rows, 'Death'),
        line: { color: 'red' }
        }
    
        var data = [t1];
        var layout = {
        title: {
            text : 'Austrailia COVID-19 Related Deaths'
        },
        xaxis: {
            title : {
            text : 'Dates' 
            }
        } ,
        yaxis : {
            title : {
            text : 'Deaths'
            }
        }
        };    
        Plotly.newPlot('myChart', data, layout);
    })
}

function amazonHigh() {
    Plotly.d3.csv(amznHigh, function(err, rows){
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
        }
        
        var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'Amazon High',
        x: unpack(rows, 'date'),
        y: unpack(rows, 'high'),
        line: {color: 'green'}
        }
    
        var data = [t1];
        var layout = {
        title: {
            text : 'Amazon High'
        },
        xaxis: {
            title : {
            text : 'Dates' 
            }
        } ,
        yaxis : {
            title : {
            text : 'High'
            }
        }
        };    
        Plotly.newPlot('myChart', data, layout);
    })
 }
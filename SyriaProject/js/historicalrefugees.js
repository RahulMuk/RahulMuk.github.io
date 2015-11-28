      google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Crisis', 'Number of Refugees'],
              ['Syria', 4000000],
              ['Afghanistan', 2600000],
              ['Rwanda', 2300000],
              ['Iraq', 1400000],
              ['Kosovo', 863000],
              ['Liberia', 640000],
              ['Armenia/Azerbaijan', 500000],
              ['Chechnya', 325000],
        ]);


        var options = {
          height: 400,
          legend: {position: 'none'},
          chart: {
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        
        };

        var chart = new google.charts.Bar(document.getElementById('time'));

        chart.draw(data, options);
      }




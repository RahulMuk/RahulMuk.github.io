      google.load("visualization", "1", {packages:["geochart"]});
      google.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['Country', 'Number of Refugees'],
          ['Germany', 200000],
          ['United States', 1500],
          ['Brazil', 2077],
          ['Canada', 2374],
          ['France', 5000],
          ['Russia', 1000],
          ['Turkey', 2200000],
          ['Lebanon', 1196560],
          ['Jordan', 1400000],
          ['Saudi Arabia', 100000],
          ['Iraq', 247861],
          ['United Arab Emirates', 242000],
          ['Egypt', 133862],
          ['Kuwait', 120000],
          ['Sweeden', 78000],
          ['Netherlands', 36000],
          ['Algeria',25000],
          ['Austria',200000],
          ['Armenia',17000],
          ['Greece',30000],
          ['Serbia',10000],
          ['United Kingdom',5102],
          ['Malaysia',5000],
          ['Bahrain',5000],
          ['Slovenia',34000],
          ['Libya',4716],
          ['Italy',4600],
          ['Australlia',4500],
          ['Bulgaria',4500],
          ['Tunisia',4000], 
          ['Hungary', 383000],
          ['Croatia', 55000],
          ['Romania', 1300],
          ['Czech Republic', 1500],  
          ['Argentia', 1200],
          ['Slovakia', 550],
          ['Finland', 1050],
          ['Singapore', 279],
          ['Macedonia', 160000],
          ['Belgium', 240],
          ['Ireland', 220],
          ['Poland', 150],
          ['Portugal', 149],  
          ['Cyprus', 114],  
          ['Colombia', 100],  
          ['Uruguay', 100], 
          ['Mexico',30],
          ['Kazakhstan',25],
        ]);

        var options = {
        };

        var chart = new google.visualization.GeoChart(document.getElementById('refugeesByCountry'));

        chart.draw(data, options);
      }

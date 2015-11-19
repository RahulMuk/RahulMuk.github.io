      google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Financial Aid'],
          ['United States', 4283548783],
          ['United Kingdom', 1407944880],
          ['Kuwait', 1168613572],
          ['Germany', 968942213],
          ['Saudi Arabia', 591958203],
          ['United Arab Emirates', 549245351],
          ['Canada', 522149877],
          ['Japan', 474132057],
          ['Norway',263027380],
          ['Qatar', 241618277],
          ['Netherlands', 207966713],
          ['Switzerland', 175482888],
          ['Sweeden', 172857984],
          ['Australlia', 150474987],
          ['Denmark', 143858296],
          ['France', 107077913],
          ['Italy', 98536310],
          ['Finland', 61611395],
          ['Belgium', 48618839],
          ['Ireland', 40958174],    
        ]);


        var options = {
          height: 400,
          legend: {position: 'none'},
          chart: {
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        
        };

        var chart = new google.charts.Bar(document.getElementById('funds'));

        chart.draw(data, options);
      }
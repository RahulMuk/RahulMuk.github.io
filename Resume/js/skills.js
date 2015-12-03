google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['Skill', 'Projects Worked On'],
        ['Illustrator', 20],
        ['Photoshop', 23],
        ['Indesign', 18],
        ['HTML', 25],
        ['CSS', 25],
        ['Javascript', 12]
      ]);

      var options = {
        chartArea: {width: '70%'},
        colors: ['#393939'],
        legend: {position: 'none'},
        hAxis: {
          title: 'Number of Projects Worked on',
            minValue: 0
        }
          
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
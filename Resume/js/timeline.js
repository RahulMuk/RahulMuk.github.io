      google.load("visualization", "1", {packages:["timeline"]});
      google.setOnLoadCallback(drawChart);

      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'President' });
        dataTable.addColumn({ type: 'string', id: 'Description' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Design', 'Spark Magazine', new Date(2012, 8, 25), new Date(2014, 5, 1) ],
          [ 'Design', 'Procter and Gamble', new Date(2014, 6, 8), new Date(2014, 8, 15) ],
          [ 'Coding', 'FIRST Robotics',    new Date(2010, 9, 1),  new Date(2014, 2, 4) ],
          [ 'Design and Coding',  'Flashstarts Inc.', new Date(2015, 5, 26),  new Date(2015, 8, 15) ],
          [ 'Journalism',  'WOUB Public Media', new Date(2014, 3, 28),  new Date(2015, 12, 1) ],
          [ 'Design', 'Research Associate', new Date(2015, 8, 25), new Date(2015, 12, 1) ]]);
          
        var options = {
            timeline: { colorByRowLabel: true }
        };  
                      chart.draw(dataTable, options);

      }

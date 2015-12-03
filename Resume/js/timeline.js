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
          [ 'Design', 'Spark Magazine', new Date(2012, 8, 25), new Date(2014, 4, 1) ],
          [ 'Journalism', 'Spark Magazine', new Date(2012, 8, 25), new Date(2014, 4, 1) ],
          [ 'Design', 'Procter and Gamble', new Date(2014, 6, 8), new Date(2014, 8, 15) ],
          [ 'Coding', 'FIRST Robotics',    new Date(2010, 9, 1),  new Date(2014, 2, 4) ],
          [ 'Design',  'Flashstarts Inc.', new Date(2015, 5, 26),  new Date(2015, 8, 15) ],
          [ 'Coding',  'Flashstarts Inc.', new Date(2015, 5, 26),  new Date(2015, 8, 15) ],
          [ 'Journalism',  'WOUB Public Media', new Date(2015, 3, 28),  new Date(2015, 12, 1) ],
          [ 'Coding',  'WOUB Public Media', new Date(2015, 3, 28),  new Date(2015, 12, 1) ],
          [ 'Design',  'WOUB Public Media', new Date(2015, 3, 28),  new Date(2015, 12, 1) ],
          [ 'Journalism',  'The Post Athens', new Date(2014, 8, 25),  new Date(2015, 9, 15) ],
          [ 'Coding',  'The Post Athens', new Date(2015, 1, 16),  new Date(2015, 9, 15) ],
          [ 'Design',  'The Post Athens', new Date(2014, 8, 25),  new Date(2015, 9, 15) ],
          [ 'Design', 'Research Associate', new Date(2015, 8, 25), new Date(2015, 12, 1) ]]);
          
        var options = {
            timeline: { colorByRowLabel: true },
            colors: ['#7cb5ec','#434348','#90ed7d']
        };  
                      chart.draw(dataTable, options);

      }

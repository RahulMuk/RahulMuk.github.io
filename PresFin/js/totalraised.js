$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            type: 'bar',
            renderTo: 'container'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'Sources: Federal Election Commission, campaigns, news reports New York Times'
        },
        xAxis: {
            categories: ['Jeb Bush', 'Hillary Rodham Clinton', 'Ted Cruz', 'Marco Rubio', 'Bernie Sanders','John Kasich','Ben Carson','Mike Huckabee','Rand Paul','Carly Fiorina','Lindsey Graham',"Martin O'Malley","Martin O'Malley",'Donald Trump','Rick Santorum' ],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Funds Raised (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Candidate Raised',
            data: [14.4, 47.5, 14.3, 8.9, 15.2, 0, 10.6, 2, 6.9, 1.7, 3.7, 2, 1.9, .6, .3]
        }, {
            name: 'Super Pacs Raised',
            data: [103, 15.6, 38, 16.1, 0, 0, 0, 6, 0, 3.4, 0, 0, 0, 0, 0]
        }, {
            name: 'Other Groups',
            data: [0, 0, 0, 15.8, 0, 11.5, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }]
    });
});
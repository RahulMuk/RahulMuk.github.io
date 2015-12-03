$(function () {
    // Create the chart
    $('#chart_div').highcharts({
        chart: {
            type: 'column',
            inverted: true
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'Click the columns for breakdowns of my skills'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Projects worked on'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y} Projects'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Projects<br/>'
        },

        series: [{
            name: 'Skill',
            colorByPoint: true,
            data: [{
                name: 'Web Development',
                y: 15,
                drilldown: 'Web Development'
            }, {
                name: 'Design',
                y: 30,
                drilldown: 'Print Design'
            }, {
                name: 'Other',
                y: 25,
                drilldown: 'Other'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Web Development',
                id: 'Web Development',
                data: [
                    [
                        'HTML',
                        15
                    ],
                    [
                        'CSS',
                        15
                    ],
                    [
                        'Javascript',
                        8
                    ],
                    [
                        'jQuery',
                        5
                    ],
                    [
                        'AJAX',
                        3
                    ],
                    [
                        'JSON',
                        3
                    ]
                ]
            }, {
                name: 'Print Design',
                id: 'Print Design',
                data: [
                    [
                        'Photoshop',
                        30
                    ],
                    [
                        'Illustrator',
                        28
                    ],
                    [
                        'InDesign',
                        16
                    ],
                    [
                        'Edge',
                        12
                    ],
                    [
                        'Muse',
                        7
                    ],
                    [
                        'QGIS',
                        3
                    ]
                ]
            }, {
                name: 'Other',
                id: 'Other',
                data: [
                    [
                        'Microsoft Office',
                        25
                    ],
                    [
                        'Writing',
                        23
                    ],
                    [
                        'SQL',
                        17
                    ],
                    [
                        'Tableau',
                        13
                    ],
                    [
                        'DSLR Cameras',
                        11
                    ]
                ]
            }]
        }
    });
});
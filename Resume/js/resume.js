
$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Class Makeup'
        },
        subtitle: {
            text: 'Click the slices to view my classes'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y} Credit Hours'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y} Credit Hours</b><br/>'
        },
        series: [{
            name: "Classes",
            colorByPoint: true,
            data: [{
                name: "Visual Communication",
                y: 33,
                drilldown: "Visual Communication"
            }, {
                name: "Business",
                y: 16,
                drilldown: "Business"
            }, {
                name: "Journalism",
                y: 11,
                drilldown: "Journalism"
            }, {
                name: "Other",
                y: 16,
                drilldown: "Other"
            }]
        }],
        drilldown: {
            series: [{
                name: "Visual Communication",
                id: "Visual Communication",
                data: [
                    ["Print Design", 9],
                    ["Web Design/Deveopment", 15],
                    ["Other", 9],
                ]
            }, {
                name: "Business",
                id: "Business",
                data: [
                    ["Data Analytics", 12],
                    ["Accounting", 3],
                    ["Other", 1],
                ]
            }, {
                name: "Journalism",
                id: "Journalism",
                data: [
                    ["Digital Journalism", 8],
                    ["Other", 3],
                ]
            }, {
                name: "Other",
                id: "Other",
                data: [
                    ["Social Sciences", 9],
                    ["Natural Sciences", 3],
                    ["Other", 4],
                ]
            }]
        }
    });
});
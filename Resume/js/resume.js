
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
                    ["Introduction to Studies in Visual Communication", 3],
                    ["Introduction to Basic Publication Design", 3],
                    ["Introduction to Visual Communication Skills: Photography", 3],
                    ["Visual Communication Design I", 3],
                    ["Interactive I: Web Design", 3],
                    ["Interactive II: Advanced Web Design", 3],
                    ["Design II: Informational Graphics", 3],
                    ["JavaScript & jQuery", 3],
                    ["Interactive III: Interactive Media", 3],
                    ["Multimedia Production for Visual Communication", 3],
                    ["Interactive Capstone: Advanced Interactive Media", 3],
                ]
            }, {
                name: "Business",
                id: "Business",
                data: [
                    ["Introduction to Information Analysis and Design", 3],
                    ["Business Information Systems Nonmajor", 3],
                    ["Systems Analysis and Design", 3],
                    ["Business Intelligence and Information Management", 3],
                    ["Foundations of Accounting", 3],
                    ["Introduction to the College of Business", 1],
                ]
            }, {
                name: "Journalism",
                id: "Journalism",
                data: [
                    ["Precision Language for Journalists", 3],
                    ["Fundamentals of Online Journalism", 3],
                    ["Independent Study", 2],
                    ["Data Journalism", 3]
                ]
            }, {
                name: "Other",
                id: "Other",
                data: [
                    ["Introduction to Sociology", 3],
                    ["Plants and the Global Environment", 3],
                    ["Themes in Global Politics", 3],
                    ["Introduction to Cultural Anthropology", 3],
                    ["Introduction to Graphic Design", 4]
                ]
            }]
        }
    });
});
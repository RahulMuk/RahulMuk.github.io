var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
      ],
        colors: {
            'In-State': '#ffbb78',
            'Out-of-State': '#87cefa'
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014','2015']
        }
    }
});

function osuCount2(){
        chart.load({
        columns: [
            ['In-State', 5264, 5088, 4933, 5430, 5149, 5398,5428,5078,4918,4883],
            ['Out-of-State', 898, 1022, 1108, 1177, 1177, 1506, 1758, 2005, 2106, 2095]
        ]
    }
                  
);   
}

function ouCount2(){
        chart.load({
        columns: [
            ['In-State', 3708, 3547, 3516, 3625, 3540, 3394,3292,3630,3789,3756],
            ['Out-of-State', 376, 459, 469, 447, 436, 489, 596, 614, 588, 667]
        ]
    });
}

function mamCount2(){
        chart.load({
        columns: [
            ['In-State', 2374, 2208, 2234, 2204, 2420, 2234,2234,2217,2065,2128],
            ['Out-of-State', 1275, 1263, 1280, 1036, 1179, 1347, 1421, 1427, 1576, 1684]
        ]
    });   
}    

function bgsuCount2(){
        chart.load({
        columns: [
            ['In-State', 2305, 2039, 2204, 2234, 2057, 2230,2093,2217,2319,2339],
            ['Out-of-State', 2001, 1987, 1992, 1930, 1645, 1701, 1789, 1742, 1720, 1749]
        ]
    });   
}    

function utCount2(){
        chart.load({
        columns: [
            ['In-State', 2374, 2305, 2057, 2234, 2420, 2217,2234,2234,2065,2339],
            ['Out-of-State', 1275, 1022, 1506, 1177, 1280, 1347, 1275, 1427, 1684, 1036]
        ]
    });   
}    

function uaCount2(){
        chart.load({
        columns: [
            ['In-State', 2305, 2039, 2204, 2234, 2057, 2230,2093,2217,2319,2339],
            ['Out-of-State', 1275, 1263, 1280, 1036, 1179, 1347, 1421, 1427, 1576, 1684]
        ]
    });   
}    
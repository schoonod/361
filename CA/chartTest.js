

var tests = [
{
    f: (function(chart){return chart instanceof Highcharts.Chart}),
    valid: true,
    msg: 'Chart is a Highcharts.Chart object'
},
{
    f: (function(chart){return chart.series.length}),
    valid: 4,
    msg: 'Number of series (should be 4)'
},
{
    f: (function(chart){return chart.series[0].data.length}),
    valid: 8,
    msg: 'Number of points in series (should be 8)'
},
{
    f: (function(chart){return chart.title.textStr}),
    valid: 'Can you name and describe the first amendment',
    msg: 'Has a title'
},
{
    // need to add instanceof comparison
    f: (function(chart){ return chart.series[0].data[3].graphic.symbolName }),
    valid: 'circle',
    msg: 'Grahpics are rendering'
}];


function testLoop(chart) {
    var result;
    
    for(var i=0; i<tests.length; i++) {
        result = tests[i].f(chart);
        
        console[result === tests[i].valid ? 'log' : 'error'](tests[i].msg+': ' + result);
    }
};

$(function runTest(){
    chart = new Highcharts.Chart(testChart); 
    testLoop(chart);
});

var testChart =  {
    chart: {
        renderTo: 'test'
    },
    title: {
        text: 'Can you name and describe the first amendment',
        x: -20 //center
    },
    subtitle: {
        text: 'Source: History',
        x: -10
    },
    xAxis: {
        categories: ['1940','1950', '1960', '1970', '1980', '1990', '2000',
            '2010']
    },
    yAxis: {
        title: {
            text: 'Percent correct'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: '18-29 years old',
        data: [64, 62, 61, 61, 55, 52, 47, 43]
    }, {
        name: '30-44',
        data: [74, 72, 63, 58, 59, 57, 56, 50]
    }, {
        name: '45-60',
        data: [80, 79, 78, 79, 73, 74, 72, 71]
    }, {
        name: '60+',
        data: [80, 81, 78, 77, 75, 77, 72, 73]
    }]
};




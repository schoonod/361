

var tests = [
{
    f: (function(chart){return chart instanceof Highcharts.Chart}),
    valid: true,
    msg: 'Chart is a Highcharts.Chart object'
},
{
    f: (function(chart){return chart.series[0].data.length}),
    valid: 4,
    msg: 'Number of data (should be 4)'
},
{
    f: (function(chart){return chart.series[0].data[0].y}),
    valid: 47,
    msg: 'Number of points in series (should be 47)'
},
{
    f: (function(chart){return chart.title.textStr}),
    valid: 'If the Supreme Court rules on a case 5 to 4, does this mean?',
    msg: 'Has a title'
},
{
    // need to add instanceof comparison
    f: (function(chart){return chart.series[0].data[0].name}),
    valid: 'The decision is the law and <br> needs to be followed',
    msg: 'Has Data Label'
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
			renderTo: 'test',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'If the Supreme Court rules on a case 5 to 4, does this mean?'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'The decision is the law and <br> needs to be followed',
                y: 47,
                sliced: true,
                selected: true
            }, {
                name: 'The decision is sent back <br> to Congress for reconsideration',
                y: 21
            }, {
                name: 'The decision is sent back to <br> the lower courts to be decided there',
                y: 8
            }, {
                name: 'Dont Know ',
                y: 25
            }]
        }]
};




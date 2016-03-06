$(function () {
    $('#chart1').highcharts({
        title: {
            text: 'Who wrote the US constituion?',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: History; Look it up!',
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
            data: [37, 40, 34, 39, 34, 32, 29, 25]
        }, {
            name: '30-44',
            data: [45, 44, 39, 42, 40, 36, 34, 33]
        }, {
            name: '45-60',
            data: [47, 43, 41, 44, 42, 42, 38, 39]
        }, {
            name: '60+',
            data: [49, 44, 45, 42, 41, 43, 41, 40]
        }]
    });
});


$(function () {
    $('#chart2').highcharts({
        title: {
            text: 'What year was the constituion penned?',
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
            data: [37, 40, 34, 39, 34, 32, 29, 25]
        }, {
            name: '30-44',
            data: [45, 44, 39, 42, 40, 36, 34, 33]
        }, {
            name: '45-60',
            data: [47, 43, 41, 44, 42, 42, 38, 39]
        }, {
            name: '60+',
            data: [49, 44, 45, 42, 41, 43, 41, 40]
        }]
    });
});

$(function () {
    $('#chart3').highcharts({
        title: {
            text: 'Can you name the first 5 amendments?',
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
            data: [34, 36, 30, 32, 29, 24, 25, 23]
        }, {
            name: '30-44',
            data: [44, 42, 43, 42, 39, 34, 32, 30]
        }, {
            name: '45-60',
            data: [47, 43, 41, 44, 42, 40, 38, 39]
        }, {
            name: '60+',
            data: [49, 44, 45, 42, 41, 43, 41, 40]
        }]
    });
});

$(function () {
    $('#chart4').highcharts({
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
    });
});
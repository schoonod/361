//pie chartn3

$(function () {
    $('#chartn3').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'If the Supreme Court rules on a case 5 to 4, does this mean…?'
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
                name: 'Don’t Know ',
                y: 25
            }]
        }]
    });
});

//end pie chart n3
//pie chartn2

$(function () {
    $('#chartn2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Who has the final responsibility to determine if a law is <br>constitutional or not? The president, Congress, or the Supreme Court?'
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
                name: 'Supreme Court',
                y: 62,
                sliced: true,
                selected: true
            }, {
                name: 'President',
                y: 12
            }, {
                name: 'Congress',
                y: 17
            }, {
                name: 'Not Sure/Dont Know',
                y: 8
            }]
        }]
    });
});

//end pie chart n2
//pie chart n1

$(function () {
    $('#chartn1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'How Much of  majority is required for The US Senate and <br>the House of Representatives to override a pressidential veto? UNAIDED'
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
                name: 'Two Thirds',
                y: 27,
                sliced: true,
                selected: true
            }, {
                name: 'Other',
                y: 26
            }, {
                name: 'Not Sure/Dont know',
                y: 47
            }]
        }]
    });
});

//end pie chart n1
//pie chart0

$(function () {
    $('#chart0').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Would you mind naming any of them (three branches of government)'
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
                name: 'Know all three branches',
                y: 36,
                sliced: true,
                selected: true
            }, {
                name: 'They know two branches',
                y: 16
            }, {
                name: 'They know one branch',
                y: 13
            }, {
                name: 'They do not know any branches',
                y: 35
            }]
        }]
    });
});

//end pie chart 0

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
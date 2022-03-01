var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Owner", "Reserve", "Team", "Holders", "Marketing", "Pools'],
        datasets: [{
            data: [,, , ,,],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Token Distribution',
            position: 'top',
            fontSize: 16,
            fontColor: '#fff',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#fff',

                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
 
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});
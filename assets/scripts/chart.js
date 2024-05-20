// Sample data for charts
const pieChartData = {
    values: [40, 30, 20, 10],
    labels: ['A', 'B', 'C', 'D'],
    type: 'pie',
    marker: {
        colors: ['#03045e', '#023e8a', '#0077b6', '#0096c7']
    }
};

const donutChartData = {
    values: [40, 30, 20, 10],
    labels: ['A', 'B', 'C', 'D'],
    type: 'pie',
    hole: 0.4, // Inner radius for donut chart
    marker: {
        colors: ['#03045e', '#023e8a', '#0077b6', '#0096c7']
    }
};

const lineChartData = {
    x: [1, 2, 3, 4, 5],
    y: [10, 15, 13, 17, 10],
    type: 'scatter',
    marker: {
        color: '#00b4d8' // Line color
    }
};

const heatmapData = {
    z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
    type: 'heatmap',
    colorscale: [
        [0, '#48cae4'], // Low value color
        [1, '#90e0ef']  // High value color
    ]
};

//cohort
const cohortData = [{
    x: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    y: [100, 90, 80, 70, 60], // Example data for cohort 1
    type: 'scatter',
    mode: 'lines',
    name: 'Cohort 1',
    line: {
        color: 'rgba(255, 99, 132, 1)' // Color for cohort 1
    }
}, {
    x: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    y: [90, 85, 80, 75, 70], // Example data for cohort 2
    type: 'scatter',
    mode: 'lines',
    name: 'Cohort 2',
    line: {
        color: 'rgba(54, 162, 235, 1)' // Color for cohort 2
    }
}];

const cohortLayout = {
    title: 'Cohort Chart',
    xaxis: {
        title: 'Week'
    },
    yaxis: {
        title: 'Retention Rate (%)'
    }
};

// Layout options for charts
const layout = {
    margin: { t: 0, r: 0, l: 0, b: 0 },
    plot_bgcolor: '#212121',
    paper_bgcolor: '#212121',
    font: {
        color: '#fff' // Font color
    }
};

const sankeyData = {
    type: 'sankey',
    node: {
        pad: 15,
        thickness: 30,
        line: {
            color: 'black',
            width: 0.5
        },
        label: ['A', 'B', 'C', 'D', 'E'],
        color: ['#031a6b', '#023e8a', '#0077b6', '#0096c7', '#00b4d8']
    },
    link: {
        source: [0, 0, 1, 2, 2],
        target: [1, 2, 3, 3, 4],
        value: [10, 20, 30, 40, 50]
    }
};

// Layout options for the Sankey chart
const sankeyLayout = {
    title: 'Sankey Chart',
    paper_bgcolor: 'rgba(0,0,0,0)'
};


const radarData = [{
    type: 'scatterpolar',
    r: [39, 28, 8, 7, 28, 39],
    theta: ['Call', 'Meeting', 'Note', 'Task', 'Email', 'SMS'],
    fill: 'toself',
    name: 'John Doe'
},
{
    type: 'scatterpolar',
    r: [20, 25, 30, 35, 40, 45], // Example data for the additional trace
    theta: ['Call', 'Meeting', 'Note', 'Task', 'Email', 'SMS'], // Example data for the additional trace
    fill: 'toself',
    name: 'Lorem ipsum' // Example data for the additional trace
}];

const radarLayout = {
    polar: {
        radialaxis: {
            visible: false,
            range: [0, 50]
        }
    },
    margin: { t: 15, r: 15, b: 15, l: 15 }, // Adjust padding
    showlegend: true,
    paper_bgcolor: 'rgba(0,0,0,0)'
};







// Plot the charts
Plotly.newPlot('pie-chart', [pieChartData], layout);
Plotly.newPlot('donut-chart', [donutChartData], layout);
Plotly.newPlot('line-chart', [lineChartData], layout);
Plotly.newPlot('heatmap', [heatmapData], layout);
Plotly.newPlot('radar-chart', radarData, radarLayout);
Plotly.react('sankey-chart', [sankeyData], sankeyLayout);
import * as d3 from 'd3';

fetch(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
)
  .then((res) => res.json())
  .then((res) => {
    const { data } = res;

    createStuff(data);

    const string = '2010-01-01';
  });

function createStuff(data) {
  const width = 800;
  const height = 500;

  const padding = 30;

  const barWidth = width / data.length;

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[1])])
    .range([0, height]);

  const xScale = d3
    .scaleLinear()
    .domain([d3.min(data, (d) => d[0]), d3.max(data, (d) => d[0])])
    .range([0, width]);

  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * barWidth)
    .attr('y', (d) => height - yScale(d[1]))
    .attr('width', barWidth)
    .attr('height', (d) => yScale(d[1]) + 'px');

  //create axis
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisBottom(yScale);

  svg
    .append('g')
    .attr('transform', `translate(${padding}px, ${height - padding}px)`)
    .call(xAxis);
}

// // needed for React
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <div>
//       <p>Hello from index.js</p>
//     </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import * as d3 from 'd3';

const tooltip = document.getElementById('tooltip');

fetch(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
)
  .then((res) => res.json())
  .then((res) => {
    //
    createStuff(res.map((r) => [convertMinAndSec(r.Time), new Date(r.Year)]));
  });

function convertMinAndSec(str) {
  return new Date(`2010 01 01 00:${str}`);
}

function createStuff(data) {
  const width = 800;
  const height = 400;
  const padding = 40;

  console.log(data);

  const yScale = d3
    .scaleTime()
    .domain([d3.min(data, (d) => d[0]), d3.max(data, (d) => d[0])])
    .range([padding, height - padding]);

  const xScale = d3
    .scaleTime()
    .domain([d3.min(data, (d) => d[1]), d3.max(data, (d) => d[1])])
    .range([padding, width - padding]);

  const svg = d3
    .select('#container')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // create axis
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg
    .append('g')
    .attr('id', 'x-axis')
    .attr('transform', `translate(0, ${height - padding})`)
    .call(xAxis);

  svg
    .append('g')
    .attr('id', 'y-axis')
    .attr('transform', `translate(${padding}, 0)`)
    .call(yAxis);
}

// // Needed for React
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <div>
//       <p>Hello from Index.js</p>
//     </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

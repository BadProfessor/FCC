import * as d3 from 'd3';

// 1. remote last 3Qs
// 2. find a good with for the bars
// 3. maybe change the width of the SVG to make sure the bars fit
// 4. scale the heights of the bars
// 5. enjoy

const dummy = [
  ['1947-01-01', 243.1],
  ['1947-04-01', 246.3],
  ['1947-07-01', 250.1],
  ['1947-10-01', 260.3],
  ['1948-01-01', 266.2],
  ['1948-04-01', 272.9],
  ['1948-07-01', 279.5],
  ['1948-10-01', 280.7],
];

fetch(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
)
  .then((res) => res.json())
  .then((res) => {
    const { data } = res;

    createStuff(data.filter((d) => d[0].split('-')[1] === '01'));

    const string = '2010-01-01';
  });

function createStuff(data) {
  const width = 800;
  const height = 500;
  const barWidth = width / data.length;
  const scale = d3.scaleLinear();

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
    .attr('x', (d, i) => i * (barWidth + 1))
    .attr('y', (d) => height - d[1])
    .attr('width', barWidth)
    .attr('height', (d) => d[1] + 'px');
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

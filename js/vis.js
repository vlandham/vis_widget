$(document).ready(function() {
  var w = 500,
      h = 320;

  var vis = d3.select("#vis").append("svg")
    .attr("id", "svg-vis")
    .attr("width", w)
    .attr("height", h);

  render_vis = function(csv) {
    vis.selectAll("circle")
    .data(csv).enter()
    .append("circle")
    .attr("r",function(d) { return d.x * 3; })
    .attr("cy", function(d) { return (d.y+1) * 3; })
    .attr("cx", function(d,i) { return (i + 1) * 40; })
    .on("mouseover", show_details)
    .on("mouseout", hide_details);

  }

  show_details = function(data) {
    console.log(d3.event);
  }

  hide_details = function(data) {
  }

  d3.csv("data/test.csv", render_vis);
});




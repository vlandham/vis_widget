$(document).ready(function() {
  var w = 600,
      h = 600;

  var vis = d3.select("#vis").append("svg")
    .attr("id", "svg-vis")
    .attr("width", w)
    .attr("height", h);

  render_vis = function(csv) {
    vis.selectAll("circle")
    .data(csv).enter()
    .append("circle")
    .attr("r",function(d) { return d.r * 3; })
    .attr("cy", function(d) { return (d.y+1) * 3; })
    .attr("cx", function(d,i) { return (i + 1) * 40; })
    .attr("title", function(d) { return "Im a circle! " + d.x; })
    .attr("fill", "steelblue")
    .call(d3.behavior.drag().on("drag", move).on("dragstart", dragstart).on("dragend", dragend));
  }

  function dragstart() {
    d3.select(this).attr("fill", "red");
  };

  function dragend() {
    d3.select(this).attr("fill", "steelblue");
  };


  function move() {
    var dragTarget = d3.select(this);
    dragTarget
      .attr("cx", function(){return d3.event.dx + parseInt(dragTarget.attr("cx"))})
      .attr("cy", function(){return d3.event.dy + parseInt(dragTarget.attr("cy"))});
  };

  d3.csv("data/test.csv", render_vis);
});




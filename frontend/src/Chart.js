var title = "Comments on Posts";

d3.select("body")
  .append("h3")
  .text(title);

d3.csv('http://localhost:7000/record', d3.autoType).then(function (data) {
  d3.select("body")
    .selectAll("intensity")
    .data(data)
    .enter()
    .append("intensity")
    .style("width", function(d) { return d.amount * 40 + "px"; })
    .style("height", "15px");
});
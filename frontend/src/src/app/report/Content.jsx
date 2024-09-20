import Typography from "@mui/material/Typography";

const rows = [
	["時系列", "水温"],
	["9/17 11:00", 10],
	["9/18 12:00", 5],
  ];

export default function Report() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable(rows);

    var options = {
      legend: { position: "bottom" },
    };

    var chart = new google.visualization.LineChart(
      document.getElementById("curve_chart")
    );

    chart.draw(data, options);
  }

  return (
    <>
      <div id="curve_chart"></div>
    </>
  );
}

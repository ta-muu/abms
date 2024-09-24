import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";

const rows = [
  ["時間", "水温", "閾値上限", "閾値下限"],
  ["", null, 8, 2],
  ["9/17 11:00", 10, 8, 2],
  ["9/18 12:00", 5, 8, 2],
  ["", null, 8, 2],
];

const tankList = [
  { id: 1, name: "水槽1" },
  { id: 2, name: "水槽2" },
];

export default function Report() {
  // google.charts.load("current", { packages: ["corechart"] });
  // google.charts.setOnLoadCallback(drawChart);

  // function drawChart() {
  //   var data = google.visualization.arrayToDataTable(rows);

  //   var options = {
  //     colors: ['#3366CC', 'Red', 'Red'],
  //     legend: { position: "bottom" },
  //     hAxis: {
  //       // ticks: [{v: 1, f: 'Quant'}, {v: 2, f: 'Verbal'}, {v: 3, f: 'Total'}],
  //       viewWindow: {
  //         min: 0.5,
  //         max: 3.5
  //       }
  //     }
  //   };

  //   var chart = new google.visualization.LineChart(
  //     document.getElementById("curve_chart")
  //   );

  //   chart.draw(data, options);
  // }

  const MakeMenuItem = ({tanks}) => {
    const list = tanks.map(tank => {
      return (
        <MenuItem>{tank.name}</MenuItem>
      );
    });
    return (<Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Age"
    >{list}</Select>) 
  };
  // const MakeMenuItem = (({id, name}) => {return(<MenuItem value={id}>{name}</MenuItem>)});
  return (
    <>
      <MakeMenuItem />
      <Typography variant="h4">レポート</Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">水槽</InputLabel>
        <MakeMenuItem tanks={tankList}/>
        
      </FormControl>
      {/* <div id="curve_chart"></div> */}
    </>
  );
}

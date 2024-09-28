import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

export default function Graph({ data }) {
  const options = {
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "日時",
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "水温",
        },
      },
    },
    plugins: {
      annotation: {
        annotations: {
          box_upper: {
            type: 'box',
            yMin: 25,
            backgroundColor: 'rgba(255, 99, 132, 0.25)'
          },
          box_lower: {
            type: 'box',
            yMax: 15,
            backgroundColor: 'rgba(255, 99, 132, 0.25)'
          }
        }
      }
    },
  };

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Line data={data} options={options} />
    </div>
  );
}

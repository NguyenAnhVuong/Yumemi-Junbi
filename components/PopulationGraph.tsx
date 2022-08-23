import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import populationApi from "../api/populationApi";
import { Population, Province } from "../models";
import HomeStyles from "../styles/Home.module.css";

type Props = {
  selectedProvinces: Province[];
};

const generateOptions = (provinceInfos: any) => {
  return {
    title: {
      text: "都道府県別の総人口推移グラフ",
      style: {
        fontSize: "1.4rem",
        fontWeight: "bold",
      },
    },
    credits: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },

    xAxis: {
      title: {
        text: "年度",
      },
      categories: [1980, 1990, 2000, 2010, 2020],
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    series: provinceInfos.map(
      (provinceInfo: { name: string; populations: Population[] }) => {
        return {
          name: provinceInfo.name,
          data: provinceInfo.populations,
        };
      }
    ),

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 739,
          },
          chartOptions: {
            yAxis: {
              title: {
                text: "",
              },
            },
            xAxis: {
              title: {
                text: "",
              },
              categories: [1980, 1990, 2000, 2010, 2020],
            },
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
};

const PopulationGraph = ({ selectedProvinces }: Props) => {
  const [options, setOptions] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await populationApi.getPopulation(selectedProvinces);
      if (res) {
        setOptions(generateOptions(res));
      }
    };
    fetchData();
  }, [selectedProvinces]);

  if (options) {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
  return <p className={HomeStyles.message}>ローディング。。。</p>;
};

export default PopulationGraph;

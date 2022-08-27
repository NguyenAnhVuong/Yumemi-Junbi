import { Population, Province } from "../models";
import axiosResas from "./axiosResas";

const populationApi = {
  getPopulation: async (selectedProvinces: Province[]) => {
    try {
      const data = await Promise.all(selectedProvinces.map(async (province: Province) => {
        const res = await axiosResas.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${province.prefCode}`);
        if (res.status === 200 && res.data.result && res.data.result.data && res.data.result.data.length > 0 && res.data.result.data[0].data) {
          const YEARS = [1980, 1990, 2000, 2010, 2020];
          const populationAndYearsFromApi = res.data.result.data[0].data;
          const populationAndYears = populationAndYearsFromApi.filter((population: Population) => YEARS.includes(population.year))
          const populations = populationAndYears.map((populationAndYear: Population) => populationAndYear.value);
          return {
            name: province.prefName,
            populations: populations,
          }
        }
      }));
      if (data && data.length > 0) {
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return 0;
  }
}

export default populationApi;

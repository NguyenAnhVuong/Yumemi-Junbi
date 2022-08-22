import axiosResas from "./axiosResas";

const provinceApi = {
    getAllProvinces: async () => {
        try {
            const res = await axiosResas.get("https://opendata.resas-portal.go.jp/api/v1/prefectures");
            if (res.status === 200 && res.data.result) {
                return res.data.result;
            }
        } catch (error) {
            console.log("error", error);
        }
        return 0;
    },
}

export default provinceApi;
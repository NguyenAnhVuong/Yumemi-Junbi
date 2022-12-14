import { useEffect, useState } from "react";
import { Province } from "../models";
import ProvinceStyles from "../styles/ProvinceList.module.css";

type Props = {
  provinces: Province[];
  selectedProvinces: Province[];
  setSelectedProvinces: (provinces: Province[]) => void;
};

const ProvinceList = ({
  provinces,
  selectedProvinces,
  setSelectedProvinces,
}: Props) => {
  const [selectAll, setSelectAll] = useState(true);

  const handleSelectProvince = (province: Province) => {
    const newSelectedProvinces = [...selectedProvinces];
    const index = newSelectedProvinces.findIndex(
      (p: Province) => p.prefCode === province.prefCode
    );
    if (index === -1) {
      newSelectedProvinces.push(province);
    } else {
      newSelectedProvinces.splice(index, 1);
    }
    setSelectedProvinces(newSelectedProvinces);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProvinces(provinces);
      setSelectAll(true);
    } else {
      setSelectedProvinces([]);
      setSelectAll(false);
    }
  };

  useEffect(() => {
    if (provinces && selectedProvinces.length === provinces.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [provinces, selectedProvinces]);

  return (
    <>
      <h3 className={ProvinceStyles.province_list___title}>都道府県</h3>
      <ul className={ProvinceStyles.province_list___provinces}>
        <li className={ProvinceStyles.province_list___list_item}>
          <input
            id="selectAllInput"
            type="checkbox"
            onChange={(event) => handleSelectAll(event.target.checked)}
            checked={selectAll}
          />
          <label
            htmlFor="selectAllInput"
            className={ProvinceStyles.province_list___list_item_text}
          >
            全て選択
          </label>
        </li>
        {provinces &&
          provinces.length > 0 &&
          provinces.map((province: Province) => (
            <li
              className={ProvinceStyles.province_list___list_item}
              key={province.prefCode}
            >
              <div>
                <input
                  id={`${province.prefCode}Input`}
                  type="checkbox"
                  onChange={() => handleSelectProvince(province)}
                  checked={
                    selectedProvinces.findIndex(
                      (p: Province) => p.prefCode === province.prefCode
                    ) !== -1
                  }
                />
                <label
                  htmlFor={`${province.prefCode}Input`}
                  className={ProvinceStyles.province_list___list_item_text}
                >
                  {province.prefName}
                </label>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProvinceList;

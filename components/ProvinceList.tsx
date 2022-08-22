import React, { useEffect, useState } from "react";
import provinceApi from "../api/provinceApi";
import { Province } from "../models";
import HomeStyles from "../styles/Home.module.css";
import ProvinceStyles from "../styles/ProvinceList.module.css";

type Props = {
  provinces: Province[];
};

const ProvinceList = ({ provinces }: Props) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedProvinces, setSelectedProvinces] = useState<Province[]>([]);

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
    <div className={HomeStyles.screen}>
      <div className={HomeStyles.container}>
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
      </div>
    </div>
  );
};

export default ProvinceList;

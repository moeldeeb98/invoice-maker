import React from "react";
import { useTranslation } from "react-i18next";
import Lanuages, { ChangeLang } from "../../utils/Lanuages";
import "flag-icons";
import { FaAngleDown } from "react-icons/fa";

import "./styles.scss";
import { changeLanguage } from "i18next";

function MultiLang() {
  const { i18n } = useTranslation();
  return (
    <>
      <div className="flex items-end justify-end multiLang">
        <div className="sl-nav">
          <ul>
            <li>
              <div className="flex items-center justify-center">
                <b>
                  <span
                    class={`flag fi fi-${Lanuages[i18n.language].country_code}`}
                  ></span>{" "}
                  <span>{i18n.language}</span>
                </b>
                <FaAngleDown className="mt-1" />
              </div>

              <ul>
                <li
                  onClick={() => {
                    changeLanguage("en");
                  }}
                >
                  <span
                    class={`flag fi fi-${Lanuages["en"].country_code}`}
                  ></span>
                  <span className={`${i18n.language == "en"} ? 'active' : ''`}>
                    {Lanuages["en"].name}
                  </span>
                </li>
                <li
                  onClick={() => {
                    ChangeLang("ar");
                  }}
                >
                  <span
                    class={`flag fi fi-${Lanuages["ar"].country_code}`}
                  ></span>
                  <span className={`${i18n.language == "ar"} ? 'active' : ''`}>
                    {Lanuages["ar"].name}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MultiLang;

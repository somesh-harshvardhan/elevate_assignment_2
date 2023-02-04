import React from "react";
import { IN, EG,PK } from "country-flag-icons/react/3x2";
import Select, { StylesConfig } from "react-select/";
const formatOptionLabel = ({ value, label, flag }: any) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "10px" }}>{flag}</div>
      <div>{label}</div>
    </div>
  );
};
const SelectLanguage = () => {
  const options = [
    {
      label: `Indian`,
      value: "india",
      flag: <IN height={10} />,
    },
    {
      label: `English`,
      value: "english",
      flag: <EG height={10} />,
    }
  ];
  const colorStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      border: "0 ",
      boxShadow: "0",
      "&:hover": {
        border: "0",
      },
    }),
    dropdownIndicator : (style)=>({...style,color : "var(--matte-primary)"}),
    container: (styles) => ({ ...styles, border: "none", flex: "1" }),
  };

  return (
    <Select
      options={options}
      defaultValue={options[0]}
      styles={colorStyles}
      formatOptionLabel={formatOptionLabel}
      components={{
        IndicatorSeparator: null,
      }}
    />
  );
};

export default SelectLanguage;

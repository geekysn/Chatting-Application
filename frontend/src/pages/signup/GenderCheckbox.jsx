import React from "react";

const GenderCheckbox = ({onRadioChange, genderSelected}) => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${genderSelected === "male" ? "selected":""}`}>
          <span className="label-text text-slate-800">Male</span>
          <input
            type="radio"
            name="radio-10"
            className="radio "
            checked={genderSelected === "male"}
            onChange={() => onRadioChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${genderSelected === "female" ? "selected":""}`}>
          <span className="label-text text-slate-800">Female</span>
          <input
            type="radio"
            name="radio-10"
            className="radio  "
            checked={genderSelected === "female"}
            onChange={() => onRadioChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

import React, { useState } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";

const DateForm = dateFormProps => {
  const [date, setDate] = useState({ date: "" });

  const handleDateChange = event => {
    const stateToChange = { ...date };
    if (event.target.id === "number" || event.target.id === "endTime") {
      stateToChange[event.target.id] = parseInt(event.target.value);
    } else {
      stateToChange[event.target.id] = event.target.value;
    }
    setDate(stateToChange);
  };

  const submit = () => {
    apiManager
      .addType("dates", date)
      .then(() => dateFormProps.history.push(`/routeview/1`));
  };

  return (
    <>
      <form>
        <h3>Create New Date</h3>
        <fieldset className="form">
          <div>
            <input type="date" id="date" onChange={handleDateChange} />
          </div>
          <button type="button" onClick={submit}>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default DateForm;

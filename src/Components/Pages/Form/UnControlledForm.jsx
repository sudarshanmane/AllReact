import React, { useState } from "react";
import { useRef } from "react";

const UnControlledForm = () => {
  //it is like useState only and it do not re-render to the page
  const luckyname = useRef(null);
  const [show, setShow] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    setShow(luckyname.current.value);
  };

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">Enter yout name</label>
          <input type="text" id="luckyname" ref={luckyname} />
        </div>
      </form>
      <p>{show ? `your lucky name is ${luckyname.current.value}` : "s"}</p>
    </div>
  );
};

export default UnControlledForm;

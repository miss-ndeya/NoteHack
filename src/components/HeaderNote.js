import React from "react";
import Title from "./Title";
import Button from "./Button";

const HeaderNote = ({ nombreNotes, clearAll }) => {
  return (
    <div className="d-flex justify-content-between pb-4  border-bottom">
      <div className="d-flex align-items-center gap-2">
        <Title children="Notes" className="fs-5 fw-bold" />
        <Button
          className="p-auto btn btn-secondary rounded-circle border-0 hb  me-1 text-dark"
          children={nombreNotes}
        />
      </div>
      <Button
        className=" btn btn-primary me-1 "
        children="Clear all"
        onClick={clearAll}
      />
    </div>
  );
};

export default HeaderNote;

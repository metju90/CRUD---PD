import React, { memo } from "react";
import uuid from "uuid";

const renderColumn = column => <span key={uuid()}>{column}</span>;

const Table = ({ columns, children }) => {
  return (
    <div className="box-shadow">
      <div className="symbol-row">{columns.map(renderColumn)}</div>
      {children}
    </div>
  );
};

export default memo(Table);

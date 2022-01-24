import React, { useCallback, useRef } from "react";
import { IDataRecord } from "../types";

interface IProps {
  data: IDataRecord;
  onUpdate: (id: string) => void;
}

const Row: React.FC<IProps> = ({ data, onUpdate }) => {
  const renderCount = useRef(0);

  const handleUpdate = useCallback(
    () => onUpdate(data.id),
    [data.id, onUpdate]
  );

  renderCount.current++;

  return (
    <div>
      <span className="label">{data.label}:</span>
      <span>{data.value}</span> <span>({renderCount.current})</span>
      <button className="button" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default React.memo(Row);

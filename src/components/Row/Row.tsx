import React = require('react');
import { useCallback, useMemo } from 'react';
import { IDataRecord } from '../types';

interface IProps {
  data: IDataRecord;
  onUpdate: (id: string) => void;
}

const Row: React.FC<IProps> = ({ data, onUpdate }) => {
  const memoizeData = useMemo(() => data, [data]);
  const { label, value, id } = memoizeData;

  let renderCount = 0;

  const handleUpdate = useCallback(() => onUpdate(id), [id, onUpdate]);

  renderCount++;

  return (
    <div>
      <span className="label">{label}:</span>
      <span>{value}</span> <span>({renderCount})</span>
      <button className="button" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default Row;

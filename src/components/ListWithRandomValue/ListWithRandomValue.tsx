import React from "react";
import { useCallback, useReducer } from "react";

import Row from "../Row";
import { IDataRecord } from "../types";

import { UPDATE_ITEM_ACTION_TYPE } from "./consts";
import { getGenerateValue, getInitialValue } from "./utils";

interface IAppProps {
  size?: number;
}

const updateList = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_ITEM_ACTION_TYPE: {
      const newList = state.map((list: IDataRecord) => {
        if (list.id === action.id) {
          return { ...list, ...{ value: getGenerateValue() } };
        }

        return list;
      });

      return newList;
    }
    default:
      throw new Error();
  }
};

const ListWithRandomValue: React.FC<IAppProps> = ({ size }) => {
  const [list, dispatchNewList] = useReducer(updateList, getInitialValue(size));

  const handleUpdate = useCallback(
    (id: string) => dispatchNewList({ type: UPDATE_ITEM_ACTION_TYPE, id }),
    []
  );

  return (
    <div>
      <h1>Test app</h1>
      {list?.map((el: IDataRecord) => (
        <Row key={el.label} data={el} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default ListWithRandomValue;

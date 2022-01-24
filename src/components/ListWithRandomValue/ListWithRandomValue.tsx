import { useCallback, useState } from "react";
import Row from "../Row";
import { IDataRecord } from "../types";
import { getGenerateValue, getInitialValue } from "./utils";

interface IAppProps {
  size?: number;
}

const ListWithRandomValue: React.FC<IAppProps> = ({ size }) => {
  const [list, setList] = useState<IDataRecord[]>(getInitialValue(size));

  const handleUpdate = useCallback(
    (id: string) =>
      setList(
        list?.map((l: IDataRecord) => {
          if (l.id === id) {
            return { ...l, ...{ value: getGenerateValue() } };
          }

          return l;
        })
      ),
    [list]
  );

  return (
    <div>
      <h1>Test app</h1>
      {list?.map((el, index) => (
        <Row key={`@${index}`} data={el} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default ListWithRandomValue;

export const getGenerateValue = () => Math.round(100 + Math.random() * 900);

export const getInitialValue = (size?: number) =>
  Array.from({ length: size ?? 200 }, (_el, index) => ({
    id: `@@${Math.random() * 10000}`,
    label: `label ${index + 1}`,
    value: getGenerateValue(),
  }));

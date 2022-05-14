export const camelCaseToNormalCase = (word: string) => {
  const result = word && word.replace(/([A-Z])/g, " $1");
  const finalResult =
    result && result.charAt(0).toUpperCase() + result.slice(1);

  return finalResult;
};

export const objectToSingleDataArray: (
  arr: {
    value: string;
    label: string;
  }[]
) => {
  value: string;
  label: string;
}[] = (arr: { value: string; label: string }[]) => {
  const output = arr.map(({ value, label }) => ({
    value,
    label
  }));

  return output;
};

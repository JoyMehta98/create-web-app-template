import { Select as AntdSelect, SelectProps } from "antd";

const { Option } = AntdSelect;

interface OptionList {
  value: string;
  label: string;
}
interface Props extends SelectProps {
  optionList: OptionList[];
}

export const Select = (props: Props) => {
  const { optionList, ...rest } = props;

  return (
    <AntdSelect {...rest}>
      {optionList.map((item) => (
        <Option key={`${item.value}`} value={item.value}>
          {item.label}
        </Option>
      ))}
    </AntdSelect>
  );
};

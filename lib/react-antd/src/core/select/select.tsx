import { Select as AntdSelect, SelectProps } from "antd";

const { Option } = AntdSelect;

interface Props extends SelectProps {
  optionList: { value: string; label: string }[];
}

const Select = (props: Props) => {
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

export default Select;

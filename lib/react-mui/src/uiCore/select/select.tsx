import { Select as MuiSelect, SelectProps } from "@mui/material";
import { MenuItem } from "uiCore";
import useStyle from "./style";

interface Props {
  optionList: { value: string; label: string }[];
}

const Select = ({
  className,
  disabled,
  placeholder,
  prefix,
  defaultValue,
  id,
  name,
  label,
  optionList,
  multiple,
}: Props & SelectProps) => {
  const classes = useStyle();

  return (
    <div className={classes.selectContainer}>
      <MuiSelect
        id={id}
        name={name}
        className={className}
        label={label}
        disabled={disabled}
        placeholder={placeholder}
        prefix={prefix}
        defaultValue={defaultValue}
        multiple={multiple}
      >
        {optionList.map((item) => (
          <MenuItem key={`${item.value}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </div>
  );
};

export default Select;

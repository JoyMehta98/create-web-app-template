import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import useStyle from "./style";

const TextField = ({
  className,
  variant,
  disabled,
  multiline,
  placeholder,
  hidden,
  prefix,
  defaultValue,
  name,
  label,
  color,
}: TextFieldProps) => {
  const classes = useStyle();

  return (
    <div className={classes.textFieldContainer}>
      <MuiTextField
        name={name}
        className={className}
        variant={variant}
        label={label}
        disabled={disabled}
        multiline={multiline}
        fullWidth
        color={color}
        placeholder={placeholder}
        hidden={hidden}
        prefix={prefix}
        defaultValue={defaultValue}
        size="small"
      />
    </div>
  );
};

export default TextField;

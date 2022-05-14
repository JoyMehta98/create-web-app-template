import { Input as AntdInput, InputProps } from "antd";
import { Field, FieldProps } from "formik";
import { ErrorMessage } from "core";

const Input = (props: InputProps) => (
<>
    <Field name={props.name}>
      {({ field }: FieldProps) => (
        <AntdInput
         {...props}
          {...field}
        />
      )}
    </Field>
    <ErrorMessage name={props.name} />
    </>
    );

export default Input;

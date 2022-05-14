import { Field, FieldProps } from "formik";
import { DatePicker as AntdDatePicker } from "antd";
import ErrorMessage from "core/errorMessage";



const DatePicker = () => (
  <>    
    <Field name={name}>
      {({ field }: FieldProps) => (
        <AntdDatePicker
          {...field}
        />
      )}
    </Field>
    <ErrorMessage name={name} />
  </>
);

export default DatePicker;

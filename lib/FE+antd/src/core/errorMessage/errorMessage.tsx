import { Typography } from "antd";
import { ErrorMessage as FormikErrorMessage, ErrorMessageProps } from "formik";

const { Text } = Typography;

const ErrorMessage = ({ name, className }: ErrorMessageProps) => (
  <Text type="danger" className={className}>
    <FormikErrorMessage name={name} component="span" />
  </Text>
);

export default ErrorMessage;

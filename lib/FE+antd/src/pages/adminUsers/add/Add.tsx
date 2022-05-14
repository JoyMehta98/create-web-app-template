import { Input, Select, Col, Row } from "core";
import texts from "locales/common.json";

const colProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8,
  xxl: 8
};

const AddAdminUser = () => (
  <Row gutter={[30, 15]}>
    <Col {...colProps}>
      <Input name="firstName" label={texts.firstName} />
    </Col>
    <Col {...colProps}>
      <Input name="lastName" label={texts.lastName} />
    </Col>
    <Col {...colProps}>
      <Input name="email" label={texts.emailAddress} />
    </Col>
    <Col {...colProps}>
      <Input name="mobile" label={texts.mobileNo} />
    </Col>
    <Col {...colProps}>
      <Select name="role" label={texts.role} placeHolder={texts.select} />
    </Col>
  </Row>
);

export default AddAdminUser;

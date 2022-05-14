import { DatePicker, Input, Select, Upload, Col, Row } from "core";
import texts from "locales/common.json";
import images from "constants/images";

const colProps = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 12,
  xl: 8,
  xxl: 8
};

const AddStaffMember = () => (
  <Row gutter={[30, 20]}>
    <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
      <Upload
        name="image"
        src={images.adminProfile}
        imgClassName="staff-image"
        className="staff-image-upload"
      />
    </Col>
    <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={18}>
      <Row gutter={[30, 20]}>
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
          <DatePicker name="birthDate" />
        </Col>
        <Col {...colProps}>
          <Select
            name="gender"
            label={texts.gender}
            placeHolder={texts.select}
          />
        </Col>
        <Col {...colProps}>
          <Select name="role" label={texts.role} placeHolder={texts.select} />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default AddStaffMember;

import { DatePicker, Input, Select, Upload, Col, Row } from "core";
import texts from "locales/users.json";
import commonTexts from "locales/common.json";
import images from "constants/images";

const colProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8,
  xxl: 8
};

const AddUser = () => (
  <Row gutter={[30, 20]}>
    <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
      <Upload
        name="image"
        src={images.adminProfile}
        imgClassName="user-image"
        className="user-image-upload"
      />
    </Col>
    <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={18}>
      <Row gutter={[30, 20]}>
        <Col {...colProps}>
          <Input
            name="registrationCode"
            label={texts.registrationCode}
            size="middle"
          />
        </Col>
        <Col {...colProps}>
          <Input name="firstName" label={commonTexts.firstName} />
        </Col>
        <Col {...colProps}>
          <Input name="lastName" label={commonTexts.lastName} />
        </Col>
        <Col {...colProps}>
          <Input name="email" label={commonTexts.emailAddress} />
        </Col>
        <Col {...colProps}>
          <Input name="mobile" label={commonTexts.mobileNo} />
        </Col>
        <Col {...colProps}>
          <DatePicker name="birthDate" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={16} xxl={16}>
          <Input name="fullAddress" label={commonTexts.fullAddress} />
        </Col>
        <Col {...colProps}>
          <Select
            name="country"
            label={commonTexts.country}
            placeHolder={commonTexts.select}
          />
        </Col>
        <Col {...colProps}>
          <Select
            name="city"
            label={commonTexts.city}
            placeHolder={commonTexts.select}
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default AddUser;

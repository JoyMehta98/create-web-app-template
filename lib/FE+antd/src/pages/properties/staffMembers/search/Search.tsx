import { Form, FormikProvider } from "formik";
import { Button, Card, Input, Select, Col, Row, Space, DatePicker } from "core";
import commonTexts from "locales/common.json";
import texts from "locales/staffMembers.json";
import useSearchFormik from "./useSearchFormik";
import "../staffMembers.scss";

const StaffMemberSearch = () => {
  const formik = useSearchFormik();
  const colProps = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 8,
    xxl: 6
  };

  return (
    <FormikProvider value={formik}>
      <Form>
        <Card
          title={texts.searchStaffMember}
          className="staff-member-search-card"
          testId="staff-member-search"
        >
          <Row gutter={[30, 20]}>
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
              <Input name="mobileNo" label={commonTexts.mobileNo} />
            </Col>
            <Col {...colProps}>
              <DatePicker name="birthDate" label={commonTexts.birthDate} />
            </Col>
            <Col {...colProps}>
              <Select
                name="gender"
                label={commonTexts.gender}
                placeHolder={commonTexts.select}
              />
            </Col>
            <Col {...colProps}>
              <Select
                name="role"
                label={commonTexts.role}
                placeHolder={commonTexts.select}
              />
            </Col>
            <Col {...colProps} className="d-flex align-items-end">
              <Space className="staff-member-search-button">
                <Button type="primary">{commonTexts.search}</Button>
                <Button>{commonTexts.reset}</Button>
              </Space>
            </Col>
          </Row>
        </Card>
      </Form>
    </FormikProvider>
  );
};

export default StaffMemberSearch;

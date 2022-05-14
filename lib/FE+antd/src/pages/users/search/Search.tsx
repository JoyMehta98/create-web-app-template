import { Col, Row, Space } from "antd";
import { Button, Card, Input, Select } from "core";
import { Form, FormikProvider } from "formik";
import texts from "locales/users.json";
import commonTexts from "locales/common.json";
import useSearchFormik from "./useSearchFormik";

const UserSearch = () => {
  const formik = useSearchFormik();
  const colProps = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 6,
    xl: 6,
    xxl: 6
  };

  return (
    <FormikProvider value={formik}>
      <Form>
        <Card
          title={texts.searchUser}
          className="user-search-card"
          testId="user-search"
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
              <Select name="country" label={commonTexts.country} />
            </Col>
            <Col {...colProps}>
              <Select name="city:" label={commonTexts.city} />
            </Col>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 6 }}
              xl={{ span: 6, offset: 6 }}
              xxl={{ span: 6, offset: 6 }}
              offset={6}
              className="d-flex align-items-end"
            >
              <Space className="user-search-button">
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

export default UserSearch;

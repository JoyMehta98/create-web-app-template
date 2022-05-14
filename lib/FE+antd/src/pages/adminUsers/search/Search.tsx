import { Button, Card, Input, Col, Row, Space } from "core";
import { Form, FormikProvider } from "formik";
import commonTexts from "locales/common.json";
import texts from "locales/adminUsers.json";
import useAdminUserFormik from "./useSearchFormik";
import "../adminUsers.scss";

const AdminUserSearch = () => {
  const formik = useAdminUserFormik();
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
          title={texts.searchAdminUsers}
          className="admin-user-search-card"
          testId="admin-user-search"
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
            <Col span={24}>
              <Space className="admin-user-search-button">
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

export default AdminUserSearch;

import { Form, FormikProvider } from "formik";
import { Button, Card, Input, Col, Row, Space } from "core";
import commonTexts from "locales/common.json";
import texts from "locales/pushNotifications.json";
import useSearchFormik from "./userSearchFormik";

const SearchNotification = () => {
  const formik = useSearchFormik();

  return (
    <FormikProvider value={formik}>
      <Form>
        <Card
          title={texts.searchNotifications}
          className="search-notifications-card"
          testId="search-notifications"
        >
          <Row gutter={[30, 20]}>
            <Col span={24}>
              <Input name="title" label={texts.notificationTitle} />
            </Col>
            <Col span={24}>
              <Space className="search-button">
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

export default SearchNotification;

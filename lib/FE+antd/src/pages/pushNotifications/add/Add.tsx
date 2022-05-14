import { useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider } from "formik";
import {
  Button,
  Card,
  Col,
  Input,
  RadioGroup,
  Row,
  Select,
  Space,
  TextArea
} from "core";
import Layout from "layout";
import texts from "locales/pushNotifications.json";
import commonTexts from "locales/common.json";
import { usersOptions } from "constants/data";
import { LocationStateProps } from "constants/interfaces";
import useAddPushNotificationsFormik from "./useAddPushFormik";

const AddPushNotifications = () => {
  const formik = useAddPushNotificationsFormik();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationStateProps;

  return (
    <Layout>
      <FormikProvider value={formik}>
        <Form>
          <Card title={`${state.name} ${texts.pageTitle}`}>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <Input name="title" label={texts.notificationTitle} />
              </Col>
              <Col span={24}>
                <TextArea
                  autoSize={{ minRows: 8, maxRows: 8 }}
                  name="text"
                  label={texts.notificationText}
                />
              </Col>
              <Col xs={24} md={12} xl={10} xxl={6}>
                <Select
                  name="sendTo"
                  placeHolder={commonTexts.select}
                  optionlist={usersOptions}
                />
              </Col>
              <Col span={24}>
                <RadioGroup name="users" options={usersOptions} />
              </Col>
              <Col span={24}>
                <Select
                  name="user"
                  mode="multiple"
                  optionlist={usersOptions}
                  placeHolder={commonTexts.select}
                />
              </Col>
              <Col span={24}>
                <Space className="w-100 justify-content-center mt-3 flex-wrap">
                  <Button type="primary">{commonTexts.save}</Button>
                  <Button>{commonTexts.send}</Button>
                  <Button onClick={() => navigate(-1)}>
                    {commonTexts.cancel}
                  </Button>
                </Space>
              </Col>
            </Row>
          </Card>
        </Form>
      </FormikProvider>
    </Layout>
  );
};

export default AddPushNotifications;

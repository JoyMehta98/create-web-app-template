import { useLocation } from "react-router-dom";
import { Form, FormikProvider } from "formik";
import {
  Button,
  Card,
  Col,
  Input,
  Row,
  Select,
  Space,
  TextArea,
  Title,
  Upload
} from "core";
import Layout from "layout";
import commonTexts from "locales/common.json";
import texts from "locales/services.json";
import { openingHoursData } from "constants/data";
import { LocationStateProps } from "constants/interfaces";
import useAddRestaurantFormik from "./useAddRestaurantFormik";
import "../diningOut.scss";

const Add = () => {
  const formik = useAddRestaurantFormik();
  const location = useLocation();
  const state = location.state as LocationStateProps;
  const colProps = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 12,
    xxl: 12
  };

  return (
    <Layout>
      <FormikProvider value={formik}>
        <Form>
          <Card
            title={`${state.name} ${texts.restaurant}`}
            className="add-restaurant-card"
          >
            <Row gutter={[30, 20]}>
              <Col {...colProps} xxl={8}>
                <Input name="name" label={texts.restaurantName} />
              </Col>
              <Col {...colProps} xl={10} xxl={6}>
                <Input name="contactNo" />
              </Col>
              <Col span={24}>
                <TextArea
                  name="description"
                  autoSize={{ minRows: 10, maxRows: 10 }}
                />
              </Col>
              <Col {...colProps}>
                <Input name="address" />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Input name="latitude" />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Input name="longitude" />
              </Col>
              <Col span={24}>
                <div className="image-box">
                  <Upload
                    name="images"
                    className="restaurant-image-upload"
                    multiple
                    isLabel
                  />
                </div>
              </Col>
              <Col span={24}>
                <div className="opening-hours-container">
                  <Title level={5}>Opening Hours:</Title>
                  {openingHoursData.map((item) => (
                    <div className="open-hours-main-div">
                      <Title level={5} className="days-title">
                        {item.days}
                      </Title>
                      <Space className="hours-select">
                        <Select
                          name="start"
                          isLabel={false}
                          placeHolder={item.start}
                        />
                        <Select
                          name="end"
                          isLabel={false}
                          placeHolder={item.end}
                        />
                      </Space>
                    </div>
                  ))}
                </div>
              </Col>
              <Col span={24}>
                <Space className="search-button justify-content-center mt-3">
                  <Button type="primary" onClick={() => formik.handleSubmit()}>
                    {commonTexts.save}
                  </Button>
                  <Button>{commonTexts.reset}</Button>
                </Space>
              </Col>
            </Row>
          </Card>
        </Form>
      </FormikProvider>
    </Layout>
  );
};

export default Add;

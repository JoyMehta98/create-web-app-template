import { Form, FormikProvider } from "formik";
import { Button, Card, Input, Select, Col, Row, Space } from "core";
import texts from "locales/services.json";
import commonTexts from "locales/common.json";
import useSearchFormik from "./useSearchFormik";

const SearchRestaurants = () => {
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
        <Card title={texts.searchRestaurants} testId="search-restaurant">
          <Row gutter={[30, 20]}>
            <Col {...colProps}>
              <Input name="name" label={texts.restaurantName} />
            </Col>
            <Col {...colProps}>
              <Input name="contactNo" label={commonTexts.contactNo} />
            </Col>
            <Col {...colProps}>
              <Select name="status" />
            </Col>
            <Col {...colProps} xl={24} className="d-flex align-items-end">
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

export default SearchRestaurants;

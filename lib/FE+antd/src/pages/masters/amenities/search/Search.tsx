import { Button, Card, Col, Input, Row, Select, Space } from "core";
import { Form, FormikProvider } from "formik";
import texts from "locales/masters.json";
import commonTexts from "locales/common.json";
import useSearchFormik from "./useSearchFormik";

const Search = () => {
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
    <Card
      title={texts.searchAmenities}
      bordered={false}
      testId="search-amenities"
    >
      <FormikProvider value={formik}>
        <Form>
          <Row gutter={[30, 20]}>
            <Col {...colProps}>
              <Input name="amenity" />
            </Col>
            <Col {...colProps}>
              <Select
                name="category"
                label={texts.amenityCategory}
                placeHolder={commonTexts.select}
              />
            </Col>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 18 }}
              xl={{ span: 4, offset: 4 }}
              xxl={{ span: 6, offset: 6 }}
              offset={6}
              className="d-flex align-items-center"
            >
              <Space className="search-button">
                <Button type="primary">{commonTexts.search}</Button>
                <Button>{commonTexts.reset}</Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </FormikProvider>
    </Card>
  );
};

export default Search;

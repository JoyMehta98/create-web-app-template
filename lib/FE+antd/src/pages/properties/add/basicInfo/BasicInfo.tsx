import { Form, FormikProvider } from "formik";
import { Input, TextArea, Col, Row } from "core";
import texts from "locales/basicInformation.json";
import useBasicInfoFormik from "./useBasicInfoFormik";
import "./basicInfo.scss";

const BasicInfo = () => {
  const formik = useBasicInfoFormik();
  const colProps = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 8,
    xl: 6,
    xxl: 6
  };

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <section
          className="basic-information-section"
          data-testid="basic-information"
        >
          <div className="container">
            <Row gutter={[20, 25]}>
              <Col span={24}>
                <Input name="hotelName" label={texts.hotelName} />
              </Col>
              <Col {...colProps}>
                <Input name="email" label={texts.emailAddress} type="email" />
              </Col>
              <Col {...colProps}>
                <Input name="contact" label={texts.contactNo} />
              </Col>
              <Col span={24}>
                <TextArea
                  autoSize={{ minRows: 12, maxRows: 12 }}
                  name="description"
                  label={texts.description}
                  className="basic-info-description"
                />
              </Col>
              {/* // TODO:Need this code */}
              {/* <Col span={24} className="mb-1">
                <GoogleMap
                  label="Location:"
                  name="Location:"
                  center={{ lat: 37, lng: 122 }}
                  zoom={9}
                  className="basic-info-map"
                />
              </Col> */}
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Input name="address" label={texts.address} />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Input name="latitude" label={texts.latitude} />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Input name="longitude" label={texts.longitude} />
              </Col>
              <Col {...colProps}>
                <Input name="checkInTime" label={texts.checkInTime} />
              </Col>
              <Col {...colProps}>
                <Input name="checkOutTime" label={texts.checkOutTime} />
              </Col>
            </Row>
          </div>
        </section>
      </Form>
    </FormikProvider>
  );
};

export default BasicInfo;

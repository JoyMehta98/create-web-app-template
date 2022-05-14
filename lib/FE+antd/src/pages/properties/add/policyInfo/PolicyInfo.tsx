import { Col, Row } from "antd";
import { Form, FormikProvider } from "formik";
import { TextArea } from "core";
import texts from "locales/policyInformation.json";
import usePolicyInfoFormik from "./usePolicyInfoFormik";

const PolicyInfo = () => {
  const formik = usePolicyInfoFormik();

  return (
    <section data-testid="policy-information">
      <FormikProvider value={formik}>
        <Form>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <TextArea
                name="houseRules"
                label={texts.houseRules}
                autoSize={{ minRows: 12, maxRows: 12 }}
              />
            </Col>
            <Col span={24}>
              <TextArea
                name="privacyPolicy"
                label={texts.privacyPolicy}
                autoSize={{ minRows: 12, maxRows: 12 }}
              />
            </Col>
          </Row>
        </Form>
      </FormikProvider>
    </section>
  );
};

export default PolicyInfo;

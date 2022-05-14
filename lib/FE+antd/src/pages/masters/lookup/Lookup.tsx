import { useState } from "react";
import { Card, SubHeader, SelectWithoutFormik, Row, Col } from "core";
import Layout from "layout";
import { masterList } from "constants/data";
import texts from "locales/masters.json";
import AmenityCategory from "./amenityCategory";
import CheckoutOptions from "./checkoutOptions";
import SpecialRequests from "./specialRequests";

const Lookup = () => {
  const [selectedData, setSelectedData] = useState(texts.amenityCategory);
  const getLookup = (data: string) => {
    switch (data) {
      case texts.checkout:
        return <CheckoutOptions />;
      case texts.speRequests:
        return <SpecialRequests />;
      default:
        return <AmenityCategory />;
    }
  };

  return (
    <Layout>
      <SubHeader title={texts.pageTitle} />
      <Card title={texts.lookup} bordered={false} testId="lookup">
        <Row>
          <Col xs={24} sm={12} md={8} lg={8} xl={6} xxl={6}>
            <SelectWithoutFormik
              name={texts.masterType}
              optionlist={masterList}
              onChange={setSelectedData}
              value={selectedData}
              defaultValue={selectedData}
            />
          </Col>
        </Row>
      </Card>
      {getLookup(selectedData)}
    </Layout>
  );
};

export default Lookup;

import { Card } from "core";
import Layout from "layout";
import texts from "locales/bookings.json";

const Bookings = () => (
  <Layout>
    <Card title={texts.pageTitle} testId="bookings" />
  </Layout>
);

export default Bookings;

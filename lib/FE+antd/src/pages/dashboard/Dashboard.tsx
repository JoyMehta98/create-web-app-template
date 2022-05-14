import { Card } from "core";
import Layout from "layout";
import texts from "locales/dashboard.json";

const Dashboard = () => (
  <Layout>
    <Card title={texts.pageTitle} bordered={false} testId="dashboard" />
  </Layout>
);

export default Dashboard;

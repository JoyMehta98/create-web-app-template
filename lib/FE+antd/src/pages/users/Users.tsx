import { SubHeader } from "core";
import Layout from "layout";
import texts from "locales/users.json";
import UserSearch from "./search";
import UserTable from "./table";
import "./users.scss";

const Users = () => (
  <Layout>
    <div data-testid="users">
      <SubHeader title={texts.pageTitle} />
      <UserSearch />
      <UserTable />
    </div>
  </Layout>
);

export default Users;

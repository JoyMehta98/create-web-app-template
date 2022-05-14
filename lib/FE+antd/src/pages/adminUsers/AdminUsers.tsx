import { SubHeader } from "core";
import Layout from "layout";
import texts from "locales/adminUsers.json";
import AdminUserSearch from "./search";
import AdminUsersTable from "./table";

const AdminUsers = () => (
  <Layout>
    <div data-testid="admin-users">
      <SubHeader title={texts.pageTitle} />
      <AdminUserSearch />
      <AdminUsersTable />
    </div>
  </Layout>
);

export default AdminUsers;

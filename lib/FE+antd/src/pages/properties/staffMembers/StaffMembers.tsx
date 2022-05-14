import { useLocation } from "react-router-dom";
import { SubHeader } from "core";
import Layout from "layout";
import texts from "locales/properties.json";
import { LocationStateProps } from "constants/interfaces";
import StaffMemberSearch from "./search";
import StaffMemberTable from "./table";

const StaffMembers = () => {
  const location = useLocation();
  const state = location.state as LocationStateProps;

  return (
    <Layout>
      <div data-testid="staff-members">
        <SubHeader title={`${texts.viewStaff} ${state.name}`} withBack />
        <StaffMemberSearch />
        <StaffMemberTable />
      </div>
    </Layout>
  );
};

export default StaffMembers;

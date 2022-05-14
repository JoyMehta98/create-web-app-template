import { useNavigate } from "react-router-dom";
import { ActionButton, Card, SubHeader, Table, Button } from "core";
import Layout from "layout";
import { propertyData } from "constants/data";
import texts from "locales/properties.json";
import commonTexts from "locales/common.json";
import { ROUTE_PATH } from "routes";
import { PlusIcon } from "core/icons";

interface ActionProps {
  propertyName: string;
}

const Properties = () => {
  const navigate = useNavigate();

  const handleAction = (propertyName: string) => {
    navigate(ROUTE_PATH.viewStaffMembers, {
      state: {
        name: propertyName
      }
    });
  };
  const columns = [
    {
      title: texts.propertyName,
      dataIndex: "propertyName"
    },
    {
      title: texts.propertyOwner,
      dataIndex: "propertyOwner"
    },
    {
      title: texts.emailID,
      dataIndex: "emailID"
    },
    {
      title: texts.mobileNo,
      dataIndex: "mobileNo"
    },
    {
      title: commonTexts.actions,
      render: ({ propertyName }: ActionProps) => (
        <ActionButton
          isAddViewStaff
          isEdit
          isActive
          isDelete
          addViewStaffClick={() => handleAction(propertyName)}
          editClick={() =>
            navigate(ROUTE_PATH.editProperties, {
              state: { name: commonTexts.edit }
            })
          }
        />
      )
    }
  ];

  return (
    <Layout>
      <SubHeader title={texts.pageTitle} />
      <Card
        extra={
          <Button
            icon={<PlusIcon />}
            type="primary"
            onClick={() =>
              navigate(ROUTE_PATH.addProperties, {
                state: { name: commonTexts.add }
              })
            }
            testId="add-property"
          >
            {texts.addProperty}
          </Button>
        }
        testId="properties"
      >
        <Table
          dataSource={propertyData}
          columns={columns}
          testId="properties-table"
        />
      </Card>
    </Layout>
  );
};

export default Properties;

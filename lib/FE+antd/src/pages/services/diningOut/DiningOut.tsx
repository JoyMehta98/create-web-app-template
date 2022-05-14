import { useNavigate } from "react-router-dom";
import { ActionButton, Button, Card, SubHeader, Table } from "core";
import Layout from "layout";
import { restaurantsData } from "constants/data";
import texts from "locales/services.json";
import commonTexts from "locales/common.json";
import { ROUTE_PATH } from "routes";
import Search from "./search";

const DiningOut = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: texts.restaurantName,
      dataIndex: "name"
    },
    {
      title: commonTexts.contactNo,
      dataIndex: "contactNo"
    },
    {
      title: commonTexts.actions,
      width: 110,
      render: () => (
        <ActionButton
          isEdit
          isActive
          isDelete
          editClick={() =>
            navigate(ROUTE_PATH.editRestaurant, {
              state: { name: commonTexts.edit }
            })
          }
        />
      )
    }
  ];

  return (
    <Layout>
      <SubHeader title={texts.diningOut} />
      <Search />
      <Card
        className="mt-5"
        extra={
          <Button
            type="primary"
            onClick={() =>
              navigate(ROUTE_PATH.addRestaurant, {
                state: { name: commonTexts.add }
              })
            }
            testId="add-restaurant"
          >
            {texts.addRestaurant}
          </Button>
        }
      >
        <Table
          dataSource={restaurantsData}
          columns={columns}
          testId="restaurant-table"
        />
      </Card>
    </Layout>
  );
};

export default DiningOut;

import { useNavigate } from "react-router-dom";
import { SubHeader, Table, Card, ActionButton, Button } from "core";
import Layout from "layout";
import texts from "locales/pushNotifications.json";
import commonTexts from "locales/common.json";
import { pushNotificationsData } from "constants/data";
import { ROUTE_PATH } from "routes";
import SearchNotification from "./search";
import "./pushNotifications.scss";

const PushNotifications = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: texts.notificationTitle,
      dataIndex: "notificationTitle"
    },
    {
      title: texts.createdDate,
      dataIndex: "createdDate"
    },
    {
      title: texts.lastSentOn,
      dataIndex: "lastSentOn"
    },
    {
      title: commonTexts.actions,
      render: () => (
        <ActionButton
          isEdit
          isView
          editClick={() =>
            navigate(ROUTE_PATH.editPushNotification, {
              state: { name: commonTexts.edit }
            })
          }
        />
      )
    }
  ];

  return (
    <Layout>
      <div data-testid="push-notifications">
        <SubHeader title={texts.pageTitle} />
        <SearchNotification />
        <Card
          className="push-notifications-table-card"
          extra={
            <Button
              type="primary"
              onClick={() =>
                navigate(ROUTE_PATH.addPushNotifications, {
                  state: { name: commonTexts.add }
                })
              }
              testId="add-push-notifications"
            >
              {texts.addPushNotifications}
            </Button>
          }
        >
          <Table
            dataSource={pushNotificationsData}
            columns={columns}
            testId="push-notifications-table"
          />
        </Card>
      </div>
    </Layout>
  );
};

export default PushNotifications;

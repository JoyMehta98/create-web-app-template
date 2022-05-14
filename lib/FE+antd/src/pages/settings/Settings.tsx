import { ActionButton, Card, SubHeader, Table } from "core";
import Layout from "layout";
import { SettingData } from "constants/data";
import texts from "locales/settings.json";
import commonTexts from "locales/common.json";

const Settings = () => {
  const columns = [
    {
      title: texts.settingsTitle,
      dataIndex: "settingsTitle"
    },
    {
      title: commonTexts.actions,
      render: () => <ActionButton isEdit />
    }
  ];

  return (
    <Layout>
      <SubHeader title={texts.pageTitle} />
      <Card testId="settings-card">
        <Table
          dataSource={SettingData}
          columns={columns}
          testId="settings-table"
        />
      </Card>
    </Layout>
  );
};

export default Settings;

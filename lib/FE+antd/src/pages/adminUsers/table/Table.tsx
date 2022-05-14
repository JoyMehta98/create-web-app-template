import { useState } from "react";
import { Form, FormikProvider } from "formik";
import { ActionButton, Button, Card, Modal, Table } from "core";
import { adminUsersData } from "constants/data";
import commonTexts from "locales/common.json";
import texts from "locales/adminUsers.json";
import { SetModalVisible } from "constants/interfaces";
import AddAdminUser from "../add";
import useAdminUsersFormik from "../add/useAdminUsersFormik";
import "../adminUsers.scss";

const AdminUsersTable = () => {
  const formik = useAdminUsersFormik();
  const [visible, setVisible] = useState<SetModalVisible>({
    visibility: false,
    record: null,
    name: ""
  });

  const modalVisible = (name: string) => {
    setVisible({
      visibility: true,
      record: null,
      name
    });
  };
  const modalClose = () => {
    setVisible({ visibility: false, record: null, name: "" });
  };

  const columns = [
    {
      title: commonTexts.firstName,
      dataIndex: "firstName"
    },
    {
      title: commonTexts.lastName,
      dataIndex: "lastName"
    },
    {
      title: commonTexts.emailID,
      dataIndex: "emailID"
    },
    {
      title: commonTexts.mobileNo,
      dataIndex: "mobileNo"
    },
    {
      title: commonTexts.actions,
      render: () => (
        <ActionButton
          isEdit
          isActive
          isDelete
          editClick={() => modalVisible(texts.editAdminUser)}
        />
      )
    }
  ];

  return (
    <Card
      testId="admin-users-card"
      extra={
        <Button
          type="primary"
          onClick={() => modalVisible(texts.addAdminUser)}
          testId="add-admin-user"
        >
          {texts.addAdminUser}
        </Button>
      }
    >
      <Table
        dataSource={adminUsersData}
        columns={columns}
        testId="admin-users-table"
      />
      <Modal
        title={`${visible.name}`}
        visible={visible.visibility}
        testId="admin-user-modal"
        className="add-admin-user-model"
        onSubmit={formik.handleSubmit}
        onCancel={() => {
          modalClose();
        }}
      >
        <FormikProvider value={formik}>
          <Form>
            <AddAdminUser />
          </Form>
        </FormikProvider>
      </Modal>
    </Card>
  );
};

export default AdminUsersTable;

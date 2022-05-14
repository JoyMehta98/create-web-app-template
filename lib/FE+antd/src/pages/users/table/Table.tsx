import { useState } from "react";
import { Form, FormikProvider } from "formik";
import { ActionButton, Button, Card, Modal, Table } from "core";
import { usersData } from "constants/data";
import texts from "locales/users.json";
import commonTexts from "locales/common.json";
import { SetModalVisible } from "constants/interfaces";
import Add from "../add";
import useAddUserFormik from "../add/useAddUserFormik";

const UserTable = () => {
  const formik = useAddUserFormik();
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
      title: texts.registrationCode,
      dataIndex: "registrationCode"
    },
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
      title: commonTexts.country,
      dataIndex: "country"
    },
    {
      title: commonTexts.city,
      dataIndex: "city"
    },
    {
      title: commonTexts.actions,
      render: () => (
        <ActionButton
          isEdit
          isActive
          isDelete
          editClick={() => modalVisible(texts.editUser)}
        />
      )
    }
  ];

  return (
    <Card
      title={texts.pageTitle}
      testId="users-card"
      extra={
        <Button
          type="primary"
          onClick={() => modalVisible(texts.addUser)}
          testId="add-user"
        >
          {texts.addUser}
        </Button>
      }
    >
      <Table dataSource={usersData} columns={columns} testId="user-table" />
      <Modal
        title={`${visible.name}`}
        visible={visible.visibility}
        testId="user-modal"
        className="add-user-model"
        onSubmit={formik.handleSubmit}
        onCancel={() => {
          modalClose();
        }}
      >
        <FormikProvider value={formik}>
          <Form>
            <Add />
          </Form>
        </FormikProvider>
      </Modal>
    </Card>
  );
};

export default UserTable;

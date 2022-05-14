import { useState } from "react";
import { Form, FormikProvider } from "formik";
import { ActionButton, Button, Card, Modal, Table } from "core";
import { staffMembersData } from "constants/data";
import commonTexts from "locales/common.json";
import texts from "locales/staffMembers.json";
import { SetModalVisible } from "constants/interfaces";
import Add from "../add";
import useAddMemberFormik from "../add/useAddMemberFormik";

const StaffMemberTable = () => {
  const formik = useAddMemberFormik();
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
      title: commonTexts.dob,
      dataIndex: "dob"
    },
    {
      title: commonTexts.gender,
      dataIndex: "gender"
    },
    {
      title: commonTexts.role,
      dataIndex: "role"
    },
    {
      title: commonTexts.actions,
      render: () => (
        <ActionButton
          isEdit
          isActive
          isDelete
          editClick={() => modalVisible(texts.editStaffMember)}
        />
      )
    }
  ];

  return (
    <Card
      title={texts.pageTitle}
      testId="staff-members-card"
      extra={
        <Button
          type="primary"
          onClick={() => modalVisible(texts.addStaffMember)}
          testId="add-staff-member"
        >
          {texts.addStaffMember}
        </Button>
      }
    >
      <Table
        dataSource={staffMembersData}
        columns={columns}
        testId="staff-members-table"
      />
      <Modal
        title={`${visible.name}`}
        visible={visible.visibility}
        testId="staff-member-modal"
        className="staff-member-model"
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

export default StaffMemberTable;

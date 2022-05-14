import { useState } from "react";
import { Form, FormikProvider } from "formik";
import { Card, Table, Modal, Input, Button, ActionButton } from "core";
import { specialRequestData } from "constants/data";
import { PlusIcon } from "core/icons";
import { SetModalVisible } from "constants/interfaces";
import texts from "locales/masters.json";
import commonTexts from "locales/common.json";
import useSpecialRequestsFormik from "./useSpecialRequestsFormik";

const SpecialRequests = () => {
  const formik = useSpecialRequestsFormik();

  const [visible, setVisible] = useState<SetModalVisible>({
    visibility: false,
    record: null,
    name: ""
  });
  const [status, setStatus] = useState(false);

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
  const column = [
    {
      title: texts.specialRequests,
      dataIndex: "title"
    },
    {
      title: commonTexts.actions,
      width: 110,
      render: () => (
        <ActionButton isEdit editClick={() => modalVisible(commonTexts.edit)} />
      )
    }
  ];

  return (
    <div
      className="special-requests-container"
      data-testid="special-requests-container"
    >
      <Card
        testId="special-requests-card"
        className="mt-5"
        extra={
          <Button
            icon={<PlusIcon />}
            type="primary"
            onClick={() => modalVisible(commonTexts.add)}
            testId="add-special-requests"
          >
            {`${commonTexts.add} ${texts.specialRequests}`}
          </Button>
        }
      >
        <Table
          columns={column}
          dataSource={specialRequestData}
          testId="special-requests-table"
        />
        <Modal
          title={`${visible.name} ${texts.specialRequest}`}
          visible={visible.visibility}
          testId="special-requests-modal"
          onSubmit={formik.handleSubmit}
          onCancel={() => {
            modalClose();
            setStatus(!status);
          }}
        >
          <FormikProvider value={formik}>
            <Form>
              <Input
                name="specialRequests"
                size="middle"
                label={texts.specialReqTitle}
              />
            </Form>
          </FormikProvider>
        </Modal>
      </Card>
    </div>
  );
};

export default SpecialRequests;

import { useState } from "react";
import { Form, FormikProvider } from "formik";
import { Card, Table, Modal, Input, Button, ActionButton } from "core";
import { checkOutOptionsData } from "constants/data";
import { PlusIcon } from "core/icons";
import { SetModalVisible } from "constants/interfaces";
import texts from "locales/masters.json";
import commonTexts from "locales/common.json";
import useCheckOutFormik from "./useCheckOutFormik";

const CheckoutOptions = () => {
  const formik = useCheckOutFormik();

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
      title: texts.checkoutOptions,
      dataIndex: "title"
    },
    {
      title: commonTexts.actions,
      render: () => (
        <ActionButton isEdit editClick={() => modalVisible(commonTexts.edit)} />
      )
    }
  ];

  return (
    <div
      className="checkout-container"
      data-testid="checkout-options-container"
    >
      <Card
        testId="checkout-options-card"
        className="mt-5"
        extra={
          <Button
            icon={<PlusIcon />}
            type="primary"
            onClick={() => modalVisible(commonTexts.add)}
            testId="add-checkout-options"
          >
            {`${commonTexts.add} ${texts.checkoutOptions}`}
          </Button>
        }
      >
        <Table
          columns={column}
          dataSource={checkOutOptionsData}
          testId="checkout-options-table"
        />
        <Modal
          title={`${visible.name} ${texts.checkoutOptions}`}
          visible={visible.visibility}
          testId="checkout-options-modal"
          onSubmit={formik.handleSubmit}
          onCancel={() => {
            modalClose();
            setStatus(!status);
          }}
        >
          <FormikProvider value={formik}>
            <Form>
              <Input
                name="checkoutOptions"
                size="middle"
                label={texts.checkoutOptTitle}
              />
            </Form>
          </FormikProvider>
        </Modal>
      </Card>
    </div>
  );
};

export default CheckoutOptions;

import { useState } from "react";
import { Form, FormikProvider } from "formik";
import { Card, Modal, Table, Input, Button, ActionButton } from "core";
import { amenityCategoryData } from "constants/data";
import { SetModalVisible } from "constants/interfaces";
import { PlusIcon } from "core/icons";
import texts from "locales/masters.json";
import commonTexts from "locales/common.json";
import useAmenityFormik from "./useAmenityFormik";

const AmenityCategory = () => {
  const formik = useAmenityFormik();

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
  const columns = [
    {
      title: texts.amenityCategory,
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
    <div className="amenity-container" data-testid="amenity-container">
      <Card
        testId="amenity-category-card"
        className="mt-5"
        extra={
          <Button
            icon={<PlusIcon />}
            type="primary"
            onClick={() => modalVisible(commonTexts.add)}
            testId="add-amenity-category"
          >
            {`${commonTexts.add} ${texts.amenityCategory}`}
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={amenityCategoryData}
          testId="amenity-category-table"
        />
        <Modal
          title={`${visible.name} ${texts.amenityCategory}`}
          visible={visible.visibility}
          testId="amenity-category-modal"
          onSubmit={formik.handleSubmit}
          onCancel={() => {
            modalClose();
            setStatus(!status);
          }}
        >
          <FormikProvider value={formik}>
            <Form>
              <Input
                name="amenityCategory"
                size="middle"
                label={texts.amenityCategory}
              />
            </Form>
          </FormikProvider>
        </Modal>
      </Card>
    </div>
  );
};

export default AmenityCategory;

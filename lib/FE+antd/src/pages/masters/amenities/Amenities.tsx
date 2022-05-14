import { useState } from "react";
import { Form, FormikProvider } from "formik";
import {
  ActionButton,
  Button,
  Card,
  Col,
  Input,
  Modal,
  Row,
  Select,
  SubHeader,
  Table
} from "core";
import Layout from "layout";
import texts from "locales/masters.json";
import commonTexts from "locales/common.json";
import { amenitiesData } from "constants/data";
import { SetModalVisible } from "constants/interfaces";
import Search from "./search";
import useAmenitiesFormik from "./useAmenitiesFormik";

const Amenities = () => {
  const colProps = {
    xs: 24,
    xl: 12,
    xxl: 12
  };

  const formik = useAmenitiesFormik();
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
      title: texts.amenities,
      dataIndex: "name"
    },
    {
      title: texts.amenityCategory,
      dataIndex: "category"
    },
    {
      title: commonTexts.actions,
      render: () => (
        <ActionButton
          isEdit
          editClick={() => modalVisible(texts.editAmenity)}
        />
      )
    }
  ];

  return (
    <Layout>
      <SubHeader title={texts.amenities} />
      <Search />
      <Card
        className="mt-5"
        testId="amenity-card"
        extra={
          <Button
            type="primary"
            onClick={() => modalVisible(texts.addAmenity)}
            testId="add-amenity"
          >
            {texts.addAmenity}
          </Button>
        }
      >
        <Table
          dataSource={amenitiesData}
          columns={columns}
          testId="amenity-table"
        />
        <Modal
          title={`${visible.name}`}
          visible={visible.visibility}
          testId="amenity-modal"
          onSubmit={formik.handleSubmit}
          onCancel={() => {
            modalClose();
          }}
        >
          <FormikProvider value={formik}>
            <Form>
              <Row gutter={[15, 15]}>
                <Col {...colProps}>
                  <Input name="amenity" />
                </Col>
                <Col {...colProps}>
                  <Select name="category" label={texts.amenityCategory} />
                </Col>
              </Row>
            </Form>
          </FormikProvider>
        </Modal>
      </Card>
    </Layout>
  );
};

export default Amenities;

import { useState } from "react";
import { Form, FormikProvider } from "formik";
import {
  ActionButton,
  Modal,
  Table,
  Input,
  TextArea,
  Select,
  Col,
  Row
} from "core";
import { roomInfoData } from "constants/data";
import { SetModalVisible } from "constants/interfaces";
import texts from "locales/properties.json";
import commonTexts from "locales/common.json";
import useRoomInfoFormik from "./useRoomInfoFormik";
import "./roomInfo.scss";

const RoomInfo = () => {
  const [visible, setVisible] = useState<SetModalVisible>({
    visibility: false,
    record: null,
    name: ""
  });
  const formik = useRoomInfoFormik();

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
      title: texts.roomName,
      dataIndex: "roomName"
    },
    {
      title: texts.floorName,
      dataIndex: "floorName"
    },
    {
      title: commonTexts.actions,
      render: () => (
        <ActionButton
          isEdit
          isActive
          editClick={() => modalVisible(texts.editRoom)}
        />
      )
    }
  ];

  return (
    <FormikProvider value={formik}>
      <Form>
        <section className="room-info-section" data-testid="room-info">
          <Table
            dataSource={roomInfoData}
            columns={columns}
            testId="room-info-table"
          />
          <Modal
            visible={visible.visibility}
            title={visible.name}
            onCancel={modalClose}
            onSubmit={formik.handleSubmit}
            className="room-info-model"
          >
            <Row gutter={[30, 20]}>
              <Col span={8}>
                <Input name="roomName" label={texts.roomNames} />
              </Col>
              <Col span={8}>
                <Select
                  name="floor"
                  placeHolder={commonTexts.select}
                  label={texts.floor}
                  className="room-floor-select"
                />
              </Col>
              <Col span={24}>
                <TextArea
                  name="description"
                  label={texts.description}
                  className="room-description"
                />
              </Col>
            </Row>
          </Modal>
        </section>
      </Form>
    </FormikProvider>
  );
};

export default RoomInfo;

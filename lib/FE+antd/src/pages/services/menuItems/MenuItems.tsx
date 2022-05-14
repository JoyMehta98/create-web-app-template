import { useState } from "react";
import { Form, FormikProvider } from "formik";
import { Button, Card, SubHeader, Badge, Calendar, Modal } from "core";
import Layout from "layout";
import { mealMenuData } from "constants/data";
import texts from "locales/services.json";
import { SetModalVisible } from "constants/interfaces";
import Add from "./Add";
import useMenuItemFormik from "./Add/useAddMenuFormik";
import "./menuItems.scss";

interface ColorProps {
  color: string;
  title: string;
}

const MenuItems = () => {
  const formik = useMenuItemFormik();
  const { menuItems } = formik.values;

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

  return (
    <Layout>
      <SubHeader title={texts.menuItems} />
      <Card
        title={
          <>
            {mealMenuData.map((item: ColorProps) => (
              <div key={item.title}>
                <Badge
                  color={item.color}
                  text={item.title}
                  className="menu-badge"
                />
              </div>
            ))}
          </>
        }
        className="menu-items-card"
        extra={
          <Button
            type="primary"
            onClick={() => modalVisible(texts.addMenuItem)}
          >
            {texts.addMenu}
          </Button>
        }
      >
        <Calendar />
        <Modal
          title={`${visible.name}`}
          visible={visible.visibility}
          testId="menu-item-modal"
          className="menu-item-modal"
          onSubmit={formik.handleSubmit}
          onCancel={() => {
            modalClose();
          }}
        >
          <FormikProvider value={formik}>
            <Form>
              <Add menuItems={menuItems} />
            </Form>
          </FormikProvider>
        </Modal>
      </Card>
    </Layout>
  );
};

export default MenuItems;

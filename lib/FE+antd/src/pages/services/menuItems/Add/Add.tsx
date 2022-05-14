import { FieldArray } from "formik";
import { Button, Col, DatePicker, Input, Row, Select } from "core";
import { MinusCircleIcon, PlusSquareIcon } from "core/icons";
import { mealTypeOptions } from "constants/data";
import texts from "locales/services.json";
import "../menuItems.scss";

interface Props {
  menuItems: string[];
}
const colProps = {
  xs: 24,
  md: 12,
  xl: 12,
  xxl: 12
};

const AddMenuItem = ({ menuItems }: Props) => (
  <Row gutter={[30, 20]}>
    <Col {...colProps}>
      <DatePicker name="date" />
    </Col>
    <Col {...colProps}>
      <Select name="type" label={texts.mealType} optionlist={mealTypeOptions} />
    </Col>
    <Col span={24}>
      <FieldArray
        name="menuItems"
        render={(data) => (
          <>
            {menuItems.map((_, index: number) => (
              <div key={`menuItems.${index}`} className="menu-item-list">
                <Input
                  name={`menuItems.${index}`}
                  label={`menuItems ${index + 1}`}
                />
                {index === 0 && (
                  <Button type="link" onClick={() => data.push("")}>
                    <PlusSquareIcon />
                  </Button>
                )}
                {index >= 1 && (
                  <Button type="link" onClick={() => data.remove(index)}>
                    <MinusCircleIcon />
                  </Button>
                )}
              </div>
            ))}
          </>
        )}
      />
    </Col>
  </Row>
);

export default AddMenuItem;

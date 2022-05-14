import { Card, GroupCheckBox } from "core";
import { bedroomCardOptions, kitchenCardOptions } from "constants/data";
import "./facilities.scss";

const Facilities = () => (
  <section className="facilities-section" data-testid="facilities">
    <div>
      <Card title="Kitchen" className="facilities-category-card">
        <GroupCheckBox options={kitchenCardOptions} />
      </Card>
      <Card title="Bedroom" className="facilities-category-card">
        <GroupCheckBox options={bedroomCardOptions} />
      </Card>
    </div>
  </section>
);

export default Facilities;

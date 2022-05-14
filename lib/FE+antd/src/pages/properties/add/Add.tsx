import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, SubHeader, Button } from "core";
import Layout from "layout";
import texts from "locales/properties.json";
import { ROUTE_PATH } from "routes";
import { LocationStateProps } from "constants/interfaces";
import Forms from "./forms";
import { tabTitle } from "../data";
import "./addProperties.scss";

const AddProperties = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationStateProps;
  const [activeTabKey, setActiveTab] = useState("0");
  const onTabChange = (key: string) => setActiveTab(key);
  const prev = () => {
    if (+activeTabKey > 0) onTabChange(String(+activeTabKey - 1));
  };
  const next = () => onTabChange(String(+activeTabKey + 1));

  return (
    <Layout>
      <SubHeader title={`${state.name} ${texts.property}`} />
      <Card
        activeTabKey={activeTabKey}
        tabList={tabTitle}
        onTabChange={onTabChange}
        className="add-properties-main-tab-card"
        testId="card-tab"
      >
        <div className="tab-content-container">{Forms(activeTabKey)}</div>
        <div className="card-steps-action">
          {+activeTabKey > 0 && (
            <Button type="default" onClick={prev} testId="previous-btn">
              {texts.previous}
            </Button>
          )}
          {+activeTabKey !== 2 && (
            <Button type="primary" onClick={next} testId="save-btn">
              {texts.save}
            </Button>
          )}
          {+activeTabKey < tabTitle.length - 1 && (
            <Button type="primary" onClick={next} testId="next-btn">
              {texts.next}
            </Button>
          )}
          <Button
            type="default"
            onClick={() => navigate(ROUTE_PATH.properties)}
            testId="close-btn"
          >
            {texts.close}
          </Button>
        </div>
      </Card>
    </Layout>
  );
};

export default AddProperties;

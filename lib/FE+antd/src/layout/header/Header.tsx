import { Col, Menu, Row } from "antd";
import { Dropdown } from "core";
import { DownIcon, KeyIcon, LogoutIcon, UserIcon } from "core/icons";
import texts from "locales/header.json";
import "./header.scss";

const Header = () => {
  const menuData = (
    <Menu>
      <Menu.Item icon={<UserIcon />}>
        <span>{texts.myProfile}</span>
      </Menu.Item>
      <Menu.Item icon={<KeyIcon />}>
        <span>{texts.changePassword}</span>
      </Menu.Item>
      <Menu.Item icon={<LogoutIcon />}>
        <span>{texts.logout}</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header-container" data-testid="common-header">
      <Row>
        <Col span={24}>
          <div className="header-dropdown">
            <Dropdown overlay={menuData} placement="bottomRight" arrow>
              <span className="admin-title">
                {texts.admin}
                <DownIcon />
              </span>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;

import { ReactNode, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
import { Layout as AntdLayout, Menu } from "antd";
import { Image } from "core";
import useUpdateDimensions from "hooks/useUpdateDimensions";
import images from "constants/images";
import texts from "locales/header.json";
import { ROUTE_PATH } from "routes";
import { MenuFoldIcon, MenuUnfoldIcon } from "core/icons";
import Header from "./header";
import layoutSidebar from "./sidebarData";
import "./layout.scss";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { isResponsive, deviceWidth } = useUpdateDimensions();
  const [collapsed, setCollapsed] = useState(isResponsive);
  const { Header: AntdHeader, Sider, Content } = AntdLayout;
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = location.pathname;

  const toggle = () => setCollapsed(!collapsed);
  const closeContent = () => {
    if (deviceWidth < 992) {
      setCollapsed(true);
    }
  };
  const collapsedIconProps = {
    className: "trigger",
    onClick: toggle
  };
  useEffect(() => {
    setCollapsed(isResponsive);
  }, [isResponsive]);

  return (
    <AntdLayout className="main-layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        id="sider"
        className={collapsed ? "collapsed-menu" : "open-menu"}
      >
        <div
          className={collapsed ? "collapsed-logo" : "layout-main-logo"}
          onClick={() => navigate(ROUTE_PATH.dashboard)}
          data-testid="layout-logo"
        >
          <Image src={images.collapsedLogo} className="logo" />
          <div className="logo-title">
            <span>{texts.travelConnect}</span>
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={[currentRoute.split("/")[1]]}
          inlineCollapsed={collapsed}
        >
          {layoutSidebar.map(({ paths, subMenu, key, name, link, icon }) => {
            const activePath = paths.includes(currentRoute);

            return subMenu?.length ? (
              <SubMenu
                className="ant-menu-submenu ant-menu-submenu-inline"
                key={`submenu-${key}`}
                icon={icon}
                title={name}
              >
                {subMenu.map(({ key, link, name, paths, icon }) => (
                  <Menu.Item
                    key={`menu-${key}`}
                    className={` ${
                      paths.includes(currentRoute) ? "active-menu" : "menu-item"
                    }`}
                    icon={icon}
                  >
                    <NavLink
                      to={{
                        pathname: link
                      }}
                      className="menu-title"
                    >
                      {name}
                    </NavLink>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item
                key={`menu-${key}`}
                className={`${activePath ? "active-menu " : "menu-item"}`}
                icon={icon}
              >
                <NavLink
                  to={{
                    pathname: link
                  }}
                  className="menu-title"
                >
                  {name}
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <AntdLayout className="site-layout">
        <AntdHeader className="main-header">
          <div
            className={collapsed ? "collapsed-button-none" : "collapsed-button"}
          >
            {collapsed ? (
              <MenuUnfoldIcon {...collapsedIconProps} />
            ) : (
              <MenuFoldIcon {...collapsedIconProps} />
            )}
          </div>
          <Header />
        </AntdHeader>
        <Content
          data-testid="layout-main-content"
          className="main-content"
          onClick={closeContent}
        >
          {children}
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;

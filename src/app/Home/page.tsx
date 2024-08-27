import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Spin } from "antd";
import StudentTable from "../Table/table";
import NewStudent from "../NewStudent/newstudent";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
};

const Portal = () => {
  const [directory, setDirectory] = useState<string>("All Student");
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  });

  const items: MenuProps["items"] = [
    {
      icon: UserOutlined,
      content: "All Student",
    },
    {
      icon: UploadOutlined,
      content: "Create New Student",
    },
  ].map((nav, index) => ({
    key: String(index + 1),
    icon: React.createElement(nav.icon),
    label: `${nav.content}`,
    onClick: () => {
      setDirectory(nav.content);
    },
  }));

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      {isloading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin spinning={isloading} size="large" tip="Loading..."></Spin>
        </div>
      ) : (
        <Layout hasSider>
          <Sider style={siderStyle}>
            <div className="demo-logo-vertical" />

            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={items}
            />
          </Sider>

          <Layout style={{ marginInlineStart: 200 }}>
            <Header style={{ padding: 0, background: colorBgContainer }} />

            {directory == "All Student" && (
              
              <Content
                style={{ margin: "24px 16px 24px", overflow: "initial" }}
              >
                
                <div
                  style={{
                    padding: 20,
                    textAlign: "center",
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <StudentTable />
                </div>
              </Content>
            )}

            {directory == "Create New Student" && (
              <Content
                style={{ margin: "24px 16px 24px", overflow: "initial" }}
              >
                <NewStudent />
              </Content>
            )}
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default Portal;

import { Form, FormikProvider } from "formik";
import { Image, Input, Password, Button, Title, Card, Col, Row } from "core";
import images from "constants/images";
import texts from "locales/auth.json";
import { KeyIcon, UserIcon } from "core/icons";
import useLoginFormik from "./useLoginFormik";
import "./login.scss";

const Login = () => {
  const formik = useLoginFormik();
  const colProps = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 12,
    xxl: 12
  };

  return (
    <FormikProvider value={formik}>
      <Form>
        <div className="login-section">
          <div className="login-container">
            <Card className="login-card-container" bordered={false}>
              <Row gutter={[15, 10]}>
                <Col {...colProps}>
                  <Image
                    src={images.loginScreenBoxImage}
                    className="login-box-image"
                  />
                </Col>
                <Col {...colProps}>
                  <div className="login-card-logo-section">
                    <Image src={images.newLogo} alt="logo" className="logo" />
                    <Row gutter={[45, 25]}>
                      <Col span={24}>
                        <Input
                          name="email"
                          placeholder={texts.email}
                          addonBefore={<UserIcon />}
                        />
                      </Col>
                      <Col span={24}>
                        <Password
                          name="password"
                          placeholder={texts.password}
                          addonBefore={<KeyIcon />}
                        />
                      </Col>
                      <Col span={24}>
                        <Button
                          type="primary"
                          className="login-btn"
                          onClick={() => formik.handleSubmit()}
                        >
                          {texts.login}
                        </Button>
                      </Col>
                      <Col span={24}>
                        <div className="forgot-password-section">
                          <Title level={5} className="forgot-title">
                            {texts.forgotPassword}
                          </Title>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default Login;

import { Modal as AntdModal, ModalProps } from "antd";

export const Modal = (props: ModalProps) => {
  const { children, ...rest } = props;

  return <AntdModal {...rest}>{children}</AntdModal>;
};

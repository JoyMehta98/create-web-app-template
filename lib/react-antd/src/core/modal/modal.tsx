import { Modal as AntdModal, ModalProps } from "antd";

const Modal = (props: ModalProps) => {
  const { children, ...rest } = props;

  return <AntdModal {...rest}>{children}</AntdModal>;
};

export default Modal;

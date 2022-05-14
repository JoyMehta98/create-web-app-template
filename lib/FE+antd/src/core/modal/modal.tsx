import { Modal as AntdModal, ModalProps } from "antd";



const Modal = (props: ModalProps) => (
  <AntdModal
   {...props}
  >
    {props.children}
  </AntdModal>
);

export default Modal;

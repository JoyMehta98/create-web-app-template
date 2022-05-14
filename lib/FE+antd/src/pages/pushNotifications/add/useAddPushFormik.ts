import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  title: string;
  text: string;
  sendTo: string;
  users: string;
  user: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  title: Yup.string().required("Please enter notification title"),
  text: Yup.string().required("Please enter notification text"),
  sendTo: Yup.string().required("Please select send to"),
  users: Yup.string().required("Please select users"),
  user: Yup.string().required("Please select user")
});

const useAddPushNotificationsFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      title: "",
      text: "",
      sendTo: "",
      users: "",
      user: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useAddPushNotificationsFormik;

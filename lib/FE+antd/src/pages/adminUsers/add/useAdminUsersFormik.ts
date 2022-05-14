import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  role: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  firstName: Yup.string().required("Please enter firstName"),
  lastName: Yup.string().required("Please enter lastName"),
  email: Yup.string()
    .email("Invalid Email Account")
    .required("Please enter email address"),
  mobile: Yup.string().required("Please enter mobile number"),
  role: Yup.string().required("Please select role")
});

const useAdminUsersFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      role: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useAdminUsersFormik;

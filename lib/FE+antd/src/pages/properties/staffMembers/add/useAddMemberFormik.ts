import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  birthDate: string;
  gender: string;
  role: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  firstName: Yup.string().required("Please enter firstName"),
  lastName: Yup.string().required("Please enter lastName"),
  email: Yup.string()
    .email("Invalid Email Account")
    .required("Please enter email address"),
  mobile: Yup.string().required("Please enter mobile number"),
  birthDate: Yup.string().required("Please enter birthDate "),
  gender: Yup.string().required("Please enter country "),
  role: Yup.string().required("Please enter city ")
});

const useAddMemberFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      birthDate: "",
      gender: "",
      role: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useAddMemberFormik;

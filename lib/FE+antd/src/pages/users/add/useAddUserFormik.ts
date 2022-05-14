import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  registrationCode: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  birthDate: string;
  fullAddress: string;
  country: string;
  city: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  registrationCode: Yup.string().required("Please enter registration code"),
  firstName: Yup.string().required("Please enter firstName"),
  lastName: Yup.string().required("Please enter lastName"),
  email: Yup.string()
    .email("Invalid Email Account")
    .required("Please enter email address"),
  mobile: Yup.string().required("Please enter mobile number"),
  birthDate: Yup.string().required("Please enter birthDate "),
  fullAddress: Yup.string().required("Please enter address "),
  country: Yup.string().required("Please enter country "),
  city: Yup.string().required("Please enter city ")
});

const useAddUserFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      registrationCode: "",
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      birthDate: "",
      fullAddress: "",
      country: "",
      city: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useAddUserFormik;

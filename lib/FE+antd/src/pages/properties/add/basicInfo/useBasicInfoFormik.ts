import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  hotelName: string;
  email: string;
  contact: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  hotelName: Yup.string().required("Please enter hotel name"),
  email: Yup.string()
    .email("Invalid Email Account")
    .required("Please enter email address"),
  contact: Yup.string().required("Please enter contact number")
});

const useBasicInfoFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      hotelName: "",
      email: "",
      contact: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useBasicInfoFormik;

import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  email: string;
  password: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  email: Yup.string().required("Please enter email"),
  password: Yup.string().required("Please enter password")
});

const useLoginFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useLoginFormik;

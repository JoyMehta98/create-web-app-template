import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  checkoutOptions: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  checkoutOptions: Yup.string().required("Please enter checkout options")
});

const useCheckOutFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      checkoutOptions: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useCheckOutFormik;

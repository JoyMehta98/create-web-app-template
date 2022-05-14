import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  houseRules: string;
  privacyPolicy: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  houseRules: Yup.string().required("Please enter house rules"),
  privacyPolicy: Yup.string().required("Please enter privacy policy")
});

const usePolicyInfoFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      houseRules: "",
      privacyPolicy: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default usePolicyInfoFormik;

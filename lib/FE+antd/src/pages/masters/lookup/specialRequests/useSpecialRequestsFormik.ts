import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  specialRequests: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  specialRequests: Yup.string().required("Please enter special requests")
});

const useSpecialRequestsFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      specialRequests: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useSpecialRequestsFormik;

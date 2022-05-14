import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  amenity: string;
  category: string;
}
const schema = Yup.object().shape({
  amenity: Yup.string().required("Please enter amenity"),
  category: Yup.string().required("Please select amenity category")
});

const useAmenitiesFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      amenity: "",
      category: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useAmenitiesFormik;

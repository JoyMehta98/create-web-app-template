import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  amenityCategory: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  amenityCategory: Yup.string().required("Please enter amenity category")
});

const useAmenityFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      amenityCategory: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useAmenityFormik;

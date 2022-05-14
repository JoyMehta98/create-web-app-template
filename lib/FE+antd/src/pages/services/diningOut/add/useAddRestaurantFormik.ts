import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  name: string;
  contactNo: string;
  description: string;
  address: string;
  latitude: string;
  longitude: string;
  images: string;
  start: string;
  end: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  name: Yup.string().required("Please enter restaurant name"),
  contactNo: Yup.string().required("Please enter contactNo"),
  description: Yup.string().required("Please enter description"),
  address: Yup.string().required("Please enter address"),
  latitude: Yup.string().required("Please enter latitude number"),
  longitude: Yup.string().required("Please enter longitude "),
  images: Yup.string().required("Please select images"),
  start: Yup.string().required("Please select start "),
  end: Yup.string().required("Please select end ")
});

const useAddRestaurantFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      name: "",
      contactNo: "",
      description: "",
      address: "",
      latitude: "",
      longitude: "",
      images: "",
      start: "",
      end: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useAddRestaurantFormik;

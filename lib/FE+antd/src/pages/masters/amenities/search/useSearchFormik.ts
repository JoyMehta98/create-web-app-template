import { useFormik } from "formik";

interface Props {
  amenity: string;
  category: string;
}

const useSearchFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      amenity: "",
      category: ""
    },
    onSubmit: () => {}
  });

  return formik;
};

export default useSearchFormik;

import { useFormik } from "formik";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  country: string;
  city: string;
}

const useSearchFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      country: "",
      city: ""
    },
    onSubmit: () => {}
  });

  return formik;
};

export default useSearchFormik;

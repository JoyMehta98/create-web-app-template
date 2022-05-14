import { useFormik } from "formik";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  birthDate: string;
  gender: string;
  role: string;
}

const useSearchFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      birthDate: "",
      gender: "",
      role: ""
    },
    onSubmit: () => {}
  });

  return formik;
};

export default useSearchFormik;

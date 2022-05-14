import { useFormik } from "formik";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

const useAdminUserFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: ""
    },
    onSubmit: () => {}
  });

  return formik;
};

export default useAdminUserFormik;

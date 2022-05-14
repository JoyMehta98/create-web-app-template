import { useFormik } from "formik";

interface Props {
  name: string;
  contactNo: string;
  status: string;
}

const useSearchFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      name: "",
      contactNo: "",
      status: ""
    },
    onSubmit: () => {}
  });

  return formik;
};

export default useSearchFormik;

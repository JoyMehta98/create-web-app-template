import { useFormik } from "formik";

interface Props {
  title: string;
}

const useSearchFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      title: ""
    },
    onSubmit: () => {}
  });

  return formik;
};

export default useSearchFormik;

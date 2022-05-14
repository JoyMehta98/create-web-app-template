import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  date: string;
  type: string;
  menuItems: string[];
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  date: Yup.string().required("Please enter date"),
  type: Yup.string().required("Please enter meal type"),
  menuItems: Yup.array()
    .of(Yup.string().required("Please enter menuItems"))
    .min(1, "Minimum one menuItems required")
});

const useMenuItemFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      date: "",
      type: "",
      menuItems: [""]
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useMenuItemFormik;

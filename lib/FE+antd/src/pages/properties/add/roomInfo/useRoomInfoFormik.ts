import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  roomName: string;
  floor: string;
  description: string;
}

const schema: Yup.SchemaOf<Props> = Yup.object().shape({
  roomName: Yup.string().required("Please enter room name"),
  floor: Yup.string().required("Please select floor"),
  description: Yup.string().required("Please enter description")
});

const useRoomInfoFormik = () => {
  const formik = useFormik<Props>({
    initialValues: {
      roomName: "",
      floor: "",
      description: ""
    },
    validationSchema: schema,
    onSubmit: () => {}
  });

  return formik;
};

export default useRoomInfoFormik;

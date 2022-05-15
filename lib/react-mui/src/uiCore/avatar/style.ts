import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {
    "&.MuiAvatar-root": {
      width: "100%",
      maxWidth: "3.75rem",
      height: "3.75rem",
      margin: "0.625rem",
    },
  },
});

export default useStyle;

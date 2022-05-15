import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "&.MuiButton-root": {
      lineHeight: "normal",
      fontSize: "12px",
      borderRadius: "0.0625rem",
      display: "flex",
      padding: "10px 20px",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "125px",
      textTransform: "unset",
    },
  },
});

export default useStyles;

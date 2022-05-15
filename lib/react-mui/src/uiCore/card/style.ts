import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {
    "&.MuiPaper-root": {
      padding: "0",
      margin: "0",
      fontSize: "0.875rem",
      lineHeight: "1.5715",
      listStyle: "none",
    },
  },
  cardContent: {
    paddingBottom: "16px !important",
  },
});

export default useStyle;

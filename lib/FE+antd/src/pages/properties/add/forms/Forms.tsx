import BasicInfo from "../basicInfo";
import Facilities from "../facilities";
import Gallery from "../gallery";
import PolicyInformation from "../policyInfo";
import RoomInformation from "../roomInfo";

const Forms = (key: string) => {
  switch (key) {
    case "0":
      return <BasicInfo />;
    case "1":
      return <Facilities />;
    case "2":
      return <RoomInformation />;
    case "3":
      return <Gallery />;
    case "4":
      return <PolicyInformation />;
    default:
      return null;
  }
};

export default Forms;

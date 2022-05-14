import { useEffect, useState } from "react";

const useUpdateDimensions = () => {
  const [deviceWidth, setDeviceWidth] = useState(
    document.getElementById("root")?.offsetWidth || 0
  );

  const handleWindowSizeChange = () => {
    setDeviceWidth(document.getElementById("root")?.offsetWidth || 0);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isResponsive = deviceWidth < 992;

  return {
    isResponsive,
    deviceWidth
  };
};

export default useUpdateDimensions;

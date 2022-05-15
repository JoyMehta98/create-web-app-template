import { Avatar as MuiAvatar, AvatarProps } from "@mui/material";
import useStyle from "./style";

const Avatar = ({ className, src, alt, children, variant }: AvatarProps) => {
  const classes = useStyle();

  return (
    <MuiAvatar
      className={`${className} ${classes.root} `}
      src={src}
      alt={alt}
      variant={variant}
    >
      {children}
    </MuiAvatar>
  );
};

export default Avatar;

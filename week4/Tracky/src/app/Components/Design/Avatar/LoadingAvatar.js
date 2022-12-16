import LoadingIndicator from "../LoadingIndicator";
import AvatarBase from "./AvatarBase";

const LoadingAvatar = ({ style }) => {
  return (
    <AvatarBase style={style}>
      <LoadingIndicator timeout={0} />
    </AvatarBase>
  );
};

export default LoadingAvatar;

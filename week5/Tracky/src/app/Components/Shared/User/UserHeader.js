import ListHeaderAvatar from "../../Design/List/ListHeaderAvatar";
import { useAuthContext } from "../Auth/AuthProvider";
import UserAvatar from "./UserAvatar";

const UserHeader = ({ onPress }) => {
  const { user } = useAuthContext();

  return (
    <ListHeaderAvatar
      title={`${user.first_name} ${user.last_name}`}
      description={user.email}
      onPress={onPress}
      avatar={<UserAvatar />}
    />
  );
};

export default UserHeader;

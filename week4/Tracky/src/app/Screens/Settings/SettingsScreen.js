import { useState } from "react";
import { FlatList, View } from "react-native";
import { Navigation } from "../../../core/navigation";
import Divider from "../../Components/Design/List/Divider";
import ListItem from "../../Components/Design/List/ListItem";
import LogoutDialog from "../../Components/Shared/Auth/Logout/LogoutDialog";
import UserHeader from "../../Components/Shared/User/UserHeader";
import { Variables } from "../../style";

const SettingsScreen = ({ navigation }) => {
  const [showLogout, setShowLogout] = useState(false);

  const items = [
    {
      key: "profile",
      onPress: () => {
        navigation.navigate(Navigation.SETTINGS_USER_UPDATE);
      },
    },
    {
      key: "logout",
      title: "Logout",
      color: Variables.colors.error,
      icon: "logout",
      onPress: () => setShowLogout(true),
    },
  ];

  const getItem = (item) => {
    if (item.key === "profile") {
      return <UserHeader onPress={item.onPress} />;
    }

    return (
      <ListItem
        title={item.title}
        color={item.color}
        onPress={item.onPress}
        icon={item.icon}
        iconColor={item.color}
      />
    );
  };

  return (
    <View>
      <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={items}
        renderItem={({ item }) => getItem(item)}
      />
      {showLogout && <LogoutDialog onDismiss={() => setShowLogout(false)} />}
    </View>
  );
};

export default SettingsScreen;

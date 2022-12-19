import { useEffect } from "react";
import { Alert } from "react-native";

const AlertDialog = ({
  title,
  description,
  onDismiss,
  actionText,
  onAction,
}) => {
  useEffect(() => {
    Alert.alert(
      title,
      description,
      [
        {
          text: "Cancel",
          onPress: () => onDismiss(),
          style: "cancel",
        },
        {
          text: actionText,
          onPress: () => onAction(),
        },
      ],
      {
        onDismiss,
      }
    );
  }, []);

  return null;
};

export default AlertDialog;

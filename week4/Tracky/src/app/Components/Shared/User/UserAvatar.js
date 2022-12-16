import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { updateUser } from "../../../../core/modules/auth/api";
import { getAvatarUrl } from "../../../../core/modules/auth/utils";
import isVoid from "../../../../core/utils/isVoid";
import ImageAvatar from "../../Design/Avatar/ImageAvatar";
import LoadingAvatar from "../../Design/Avatar/LoadingAvatar";
import TextAvatar from "../../Design/Avatar/TextAvatar";
import { useAuthContext } from "../Auth/AuthProvider";
import ImagePickerDialog from "../ImagePicker/ImagePickerDialog";

const UserAvatar = () => {
  const [showPicker, setShowPicker] = useState(false);
  const { user } = useAuthContext();
  const { mutate, isLoading, isError, error } = useMutation((user) =>
    updateUser(user)
  );

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  const handleAvatarPress = () => {
    setShowPicker(true);
  };

  const handleImage = (base64) => {
    if (!isVoid(base64)) {
      mutate({
        ...user,
        avatarFile: base64,
      });
    }
  };

  if (isLoading) {
    return <LoadingAvatar />;
  }

  const avatar = getAvatarUrl(user);

  return (
    <>
      <Pressable onPress={handleAvatarPress}>
        {avatar ? (
          <ImageAvatar source={{ uri: avatar }} />
        ) : (
          <TextAvatar>
            {user.first_name[0]} {user.last_name[0]}
          </TextAvatar>
        )}
      </Pressable>
      {showPicker && (
        <ImagePickerDialog
          onDismiss={() => setShowPicker(false)}
          onImage={handleImage}
        />
      )}
    </>
  );
};

export default UserAvatar;

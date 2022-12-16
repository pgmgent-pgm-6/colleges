import isVoid from "../../utils/isVoid";
import { Bucket } from "../files/constants";
import { getPublicUrl } from "../files/utils";

export const getAvatarUrl = (user) => {
  if (isVoid(user.avatar)) {
    return null;
  }

  return getPublicUrl(Bucket.Avatars, user.avatar);
};

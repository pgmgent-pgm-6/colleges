import UserForm from "../../Components/Shared/User/UserForm";
import { useAuthContext } from "../../Components/Shared/Auth/AuthProvider";
import DefaultView from "../../Components/Design/View/DefaultView";
import { updateUser } from "../../../core/modules/auth/api";

const UserEditScreen = ({ navigation }) => {
  const { user } = useAuthContext();

  const handleSuccess = () => {
    navigation.goBack();
  };

  return (
    <DefaultView>
      <UserForm
        updateMethod={updateUser}
        onSuccess={handleSuccess}
        initialValues={{ ...user }}
        options={{
          showPassword: false,
        }}
        label="Update"
      />
    </DefaultView>
  );
};

export default UserEditScreen;

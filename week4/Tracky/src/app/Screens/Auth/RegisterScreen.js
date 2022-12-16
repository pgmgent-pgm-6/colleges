import { StatusBar } from "expo-status-bar";
import { register } from "../../../core/modules/auth/api";
import DefaultView from "../../Components/Design/View/DefaultView";
import UserForm from "../../Components/Shared/User/UserForm";

const RegisterScreen = () => {
  return (
    <>
      <DefaultView>
        <UserForm
          updateMethod={register}
          onSuccess={() => {}}
          label="Create account"
        />
      </DefaultView>
      <StatusBar style="light" />
    </>
  );
};

export default RegisterScreen;

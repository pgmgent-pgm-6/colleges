import { useAuthContext } from "../Components/Shared/Auth/AuthProvider";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const AppContent = () => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  {
    /* import from AppNavigator-alt for alternative */
  }
  return <AppNavigator />;
};

export default AppContent;

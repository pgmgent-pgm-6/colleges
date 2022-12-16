import { logout } from "../../../../../core/modules/auth/api";
import AlertDialog from "../../../Design/Dialog/AlertDialog";

const LogoutDialog = ({ onDismiss }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <AlertDialog
      title="Are you sure you want to logout?"
      onDismiss={onDismiss}
      onAction={handleLogout}
      actionText="Yes"
    />
  );
};

export default LogoutDialog;

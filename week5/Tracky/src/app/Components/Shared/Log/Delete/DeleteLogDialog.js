import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { deleteLog } from "../../../../../core/modules/log/api";
import AlertDialog from "../../../Design/Dialog/AlertDialog";

const DeleteLogDialog = ({ id, onDismiss, onDelete }) => {
  const { mutate, isLoading, isError, error } = useMutation(deleteLog, {
    onSuccess: () => onDelete(),
  });

  const handleDelete = () => {
    mutate(id);
  };

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  return (
    <AlertDialog
      title="Remove log item"
      description="Are you sure you want to remove this log item?"
      onDismiss={onDismiss}
      onAction={handleDelete}
      actionText="Delete"
    />
  );
};

export default DeleteLogDialog;

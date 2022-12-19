import AppForm from "../Form/AppForm";
import { View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import ErrorMessage from "../../Design/Text/ErrorMessage";
import AppTextField from "../Form/AppTextField";
import AppSubmitButton from "../Form/AppSubmitButton";
import ClientSpinnerField from "../Client/ClientSpinnerField";

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  client_id: yup.number().required(),
});

const defaultValues = {
  name: "",
  client_id: null,
};

const ProjectForm = ({
  updateMethod,
  onSuccess,
  initialValues = {},
  label,
}) => {
  const { mutate, isLoading, isError, error } = useMutation(updateMethod, {
    onSuccess,
  });

  const handleSubmit = async (values) => {
    mutate(values);
  };

  return (
    <AppForm
      validationSchema={schema}
      initialValues={{ ...defaultValues, ...initialValues }}
      onSubmit={handleSubmit}
    >
      <View>
        {isError && <ErrorMessage error={error} />}
        <AppTextField name="name" label="Project name" disabled={isLoading} />
        <ClientSpinnerField
          name="client_id"
          label="Client"
          disabled={isLoading}
        />
        <AppSubmitButton disabled={isLoading}>{label}</AppSubmitButton>
      </View>
    </AppForm>
  );
};

export default ProjectForm;

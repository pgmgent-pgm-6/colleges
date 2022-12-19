import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import DefaultView from "../../Design/View/DefaultView";
import AppTextField from "../Form/AppTextField";
import ErrorMessage from "../../Design/Text/ErrorMessage";
import AppSubmitButton from "../Form/AppSubmitButton";
import AppForm from "../Form/AppForm";
import { View } from "react-native";

const getSchema = (options) => {
  return yup.object().shape({
    email: yup.string().email().required(),
    ...(options.showPassword
      ? { password: yup.string().min(8).required() }
      : {}),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
  });
};

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
};

const defaultOptions = {
  showPassword: true,
};

const UserForm = ({
  initialValues = {},
  onSuccess,
  updateMethod,
  label,
  options = {},
}) => {
  const { mutate, isLoading, isError, error } = useMutation(updateMethod, {
    onSuccess: onSuccess,
  });

  const handleSubmit = async (values) => {
    mutate(values);
  };

  const formOptions = { ...defaultOptions, ...options };

  return (
    <AppForm
      initialValues={{ ...defaultValues, ...initialValues }}
      validationSchema={getSchema(formOptions)}
      onSubmit={handleSubmit}
    >
      <View>
        {isError && <ErrorMessage error={error} />}
        <AppTextField
          name="email"
          label="Email"
          autoComplete="email"
          keyboardType="email-address"
          disabled={isLoading}
        />
        {formOptions.showPassword && (
          <AppTextField
            name="password"
            label="Password"
            secureTextEntry={true}
            disabled={isLoading}
          />
        )}
        <AppTextField
          name="first_name"
          label="First name"
          disabled={isLoading}
        />
        <AppTextField name="last_name" label="Last name" disabled={isLoading} />
        <AppSubmitButton disabled={isLoading}>{label}</AppSubmitButton>
      </View>
    </AppForm>
  );
};

export default UserForm;

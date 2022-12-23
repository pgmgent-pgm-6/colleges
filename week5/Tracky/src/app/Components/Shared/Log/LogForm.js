import AppForm from "../Form/AppForm";
import { View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import ErrorMessage from "../../Design/Text/ErrorMessage";
import AppTextField from "../Form/AppTextField";
import AppSubmitButton from "../Form/AppSubmitButton";
import { format } from "date-fns";
import { DATE_API_FORMAT } from "../../../../core/modules/log/constants";
import ProjectSpinnerField from "../Project/ProjectSpinnerField";
import AppDatePicker from "../Form/DatePicker/AppDatePicker.android";
import AppTimeTextField from "../Form/AppTimeTextField";

const schema = yup.object().shape({
  time: yup.number().min(1).required(),
  date: yup.string().required(),
  project_id: yup.number().required(),
  comment: yup.string().required(),
});

const defaultValues = {
  date: format(new Date(), DATE_API_FORMAT),
  comment: "",
  time: "",
  project_id: null,
};

const LogForm = ({ updateMethod, onSuccess, initialValues = {}, label }) => {
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
        <AppDatePicker name="date" label="Date" disabled={isLoading} />

        <AppTimeTextField name="time" label="Time" disabled={isLoading} />

        <AppTextField
          name="comment"
          label="Description"
          multiline={true}
          disabled={isLoading}
        />

        <ProjectSpinnerField
          name="project_id"
          label="Project"
          disabled={isLoading}
        />

        <AppSubmitButton disabled={isLoading}>{label}</AppSubmitButton>
      </View>
    </AppForm>
  );
};

export default LogForm;

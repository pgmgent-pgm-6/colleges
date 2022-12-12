import { useState } from "react";
import { Text, View } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject } from "../../../core/modules/project/api";
import isVoid from "../../../core/utils/isVoid";
import Button from "../../Components/Design/Button/Button";
import TextField from "../../Components/Design/Form/TextField";
import ClientSpinnerField from "../../Components/Shared/Client/ClientSpinnerField";

const ProjectAddScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(createProject, {
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      navigation.goBack();
    },
  });

  const [data, setData] = useState({
    name: "",
    client_id: null,
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePress = async () => {
    if (!isVoid(data.name)) {
      mutate(data);
    }
  };

  return (
    <View>
      <TextField
        label="Name"
        name="name"
        disabled={isLoading}
        value={data.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <ClientSpinnerField
        label="Client"
        name="client_id"
        disabled={isLoading}
        value={data.client_id}
        onChange={(value) => handleChange("client_id", value)}
      />

      <Button onPress={handlePress} disabled={isLoading}>
        Create project
      </Button>
    </View>
  );
};

export default ProjectAddScreen;

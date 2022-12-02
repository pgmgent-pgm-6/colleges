import { View } from "react-native";
import { Navigation } from "../../../core/navigation";
import Button from "../../Components/Design/Button/Button";
import Text from "../../Components/Design/Text/Text";

const ProjectsScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate(Navigation.PROJECTS_CREATE);
  };

  return (
    <View>
      <Text>Projects</Text>
      <Button onPress={handlePress}>Klik mij</Button>
    </View>
  );
};

export default ProjectsScreen;

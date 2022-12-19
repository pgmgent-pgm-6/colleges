import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../../core/modules/project/api";
import AppSpinnerField from "../Form/AppSpinnerField";

const ProjectSpinnerField = (props) => {
  const { data } = useQuery(["projects"], getProjects);

  if (!data || !data.data) {
    return null;
  }

  return (
    <AppSpinnerField
      {...props}
      items={data.data.map((item) => ({ value: item.id, label: item.name }))}
    />
  );
};

export default ProjectSpinnerField;

import { useQuery } from "react-query";
import { getClients } from "../../../../core/modules/client/api";
import SpinnerField from "../../Design/Form/SpinnerField";

const ClientSpinnerField = (props) => {
  const { data } = useQuery("clients", getClients);

  if (!data || !data.data) {
    return null;
  }

  return (
    <SpinnerField
      {...props}
      items={data.data.map((item) => ({ value: item.id, label: item.name }))}
    />
  );
};

export default ClientSpinnerField;

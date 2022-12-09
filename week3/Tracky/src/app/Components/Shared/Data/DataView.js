import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../../Design/Loading/LoadingIndicator";
import ErrorMessage from "../../Design/Text/ErrorMessage";
import CenteredView from "../../Design/View/CenteredView";
import DefaultView from "../../Design/View/DefaultView";

const DataView = ({ name, method, render }) => {
  const { data, isError, error, isLoading } = useQuery(name, method);

  if (isLoading) {
    return (
      <CenteredView>
        <LoadingIndicator />
      </CenteredView>
    );
  }

  if (isError) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  return render(data);
};

export default DataView;

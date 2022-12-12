import { useQuery } from "@tanstack/react-query";
import useTitle from "../../../../core/hooks/useTitle";
import LoadingIndicator from "../../Design/Loading/LoadingIndicator";
import ErrorMessage from "../../Design/Text/ErrorMessage";
import CenteredView from "../../Design/View/CenteredView";
import DefaultView from "../../Design/View/DefaultView";

const DataView = ({ name, method, render, titleProp }) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: name,
    queryFn: method,
  });

  useTitle(titleProp ? data?.data[titleProp] : null);

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

  return render(data.data);
};

export default DataView;

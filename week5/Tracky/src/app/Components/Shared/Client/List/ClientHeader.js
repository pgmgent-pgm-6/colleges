import ListHeader from "../../../Design/List/ListHeader";

const ClientHeader = ({ client }) => {
  return (
    <ListHeader
      title={client.name}
      description={client.projects ? `${client.projects.length} projects` : ""}
      subTitle="Projects"
    />
  );
};

export default ClientHeader;

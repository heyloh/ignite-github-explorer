interface RepositoryProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export const RepositoryItem = (props: RepositoryProps) => {
  const { repository } = props;
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url}>Acessar repositório</a>
    </li>
  );
};

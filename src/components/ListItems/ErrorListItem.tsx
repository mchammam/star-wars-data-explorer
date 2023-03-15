import ListItem from './ListItem';

function ErrorListItem({ error }: { error: Error }) {
  return <ListItem title="Error" subtitle={error.message} />;
}

export default ErrorListItem;

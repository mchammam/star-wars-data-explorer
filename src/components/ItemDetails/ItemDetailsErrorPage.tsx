import { Link } from 'react-router-dom';
import { APIResource } from '../../services/apiTypes';
import Page from '../Page';

function ItemDetailsErrorPage({
  error,
  resource,
}: {
  error: Error;
  resource: APIResource;
}) {
  return (
    <Page header="Error">
      <p
        style={{
          marginBottom: '3rem',
          marginTop: '0',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        {error.message}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link className="btn" to={`/${resource}`}>
          Back to {resource}
        </Link>
      </div>
    </Page>
  );
}

export default ItemDetailsErrorPage;

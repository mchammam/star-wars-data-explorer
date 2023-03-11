import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';

function ItemListErrorPage({ error }: { error: Error }) {
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
        <Link className="btn" to="/">
          Back to home
        </Link>
      </div>
    </Page>
  );
}

export default ItemListErrorPage;

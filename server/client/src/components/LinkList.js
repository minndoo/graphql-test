import React, { Component } from 'react';
import Link from './Link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const FEED_QUERY = gql`
  {
    categories {
      name
    }
  }
`;

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;
          const categories = data.categories;

          return (
            <div>
              {categories.map((category, index) => (
                <Link key={index} category={category} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LinkList;

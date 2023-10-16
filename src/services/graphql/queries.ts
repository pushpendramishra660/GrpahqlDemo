import {gql} from '@apollo/client';

export const GET_CUSTOMER = gql`
  query getZellerCustomer($customerId: String!) {
    getZellerCustomer(id: $customerId) {
      id
      email
      name
      role
    }
  }
`;

export const GET_LIST_CUSTOMER = gql`
  query listZellerCustomers(
    $filter: TableZellerCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZellerCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        email
        id
        name
        role
      }
      nextToken
    }
  }
`;

import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_SINGLE_BUILDING = gql`
  query UseActiveBuilding($id: Int!, $filter: PropertyFilter) {
    building(id: $id) {
      id
      bounds
      properties(filter: $filter) {
        results {
          category
          type
          rent_type
          price
          calc_price_per_sqm
          rooms
          area
          floor
          published_at
        }
      }
    }
  }
`;

export default function useActiveBuilding() {
  const { buildingId } = useParams();
  const { data, error, loading } = useQuery(GET_SINGLE_BUILDING, {
    variables: {
      id: Number(buildingId),
      filter: {
        category: {
          in: ['apartment', 'house', 'office'],
        },
        type: {
          in: ['sell', 'rent', 'auction'],
        },
        price: {
          gt: 1,
        },
      },
    },
  });
  return { data: data?.building || {}, error, loading };
}

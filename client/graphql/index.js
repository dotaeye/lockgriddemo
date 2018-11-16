import gql from 'graphql-tag'

export const gridFragment = gql`
  fragment gridinfo on GridInfo {
    id
    pid
    gnumber
    status
    price
    weight
    locked
  }
`

export const getGridInfosQuery = gql`
  query {
    getGridInfos {
      ...gridinfo
    }
  }
  ${gridFragment}
`

export const changeGridStatusMutation = gql`
  mutation($input: ChangeGridInput!) {
    changeGridStatus(input: $input) {
      ...gridinfo
    }
  }
  ${gridFragment}
`

export const lockGrids = gql`
  mutation($input: lockGridInput!) {
    lockGrids(input: $input) {
      ...gridinfo
    }
  }
  ${gridFragment}
`

export const unlockGrids = gql`
  mutation($input: lockGridInput!) {
    unlockGrids(input: $input) {
      ...gridinfo
    }
  }
  ${gridFragment}
`

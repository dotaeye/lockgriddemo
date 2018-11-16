/**
 * @author zhangyi
 * @date 2018/9/29
 */
import React, { Component } from 'react'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloProvider } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import Routes from './routes'
import { hot } from 'react-hot-loader'

const host =
  process.env.NODE_ENV === 'development' ? 'localhost' : '117.50.38.146'

const httpLink = createHttpLink({ uri: `http://${host}:4308` })
const authLink = setContext((_, { headers }) => {
  const token = 'test token string'
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const createApolloClient = (cache = {}) =>
  new ApolloClient({
    cache: new InMemoryCache().restore(cache),
    link: authLink.concat(httpLink)
  })

const apolloClient = createApolloClient()

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <section className="app-container">
          <Routes />
        </section>
      </ApolloProvider>
    )
  }
}

export default hot(module)(withRouter(App))

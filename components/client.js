
import { useState, useEffect } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { concatPagination } from '@apollo/client/utilities'
const API_URL = "https://lacartonomades-backend.osc-fr1.scalingo.io/graphql"

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
    if (networkError) console.log(`[Network error]: ${networkError}`)
})

const httpLink = new HttpLink({
    uri: API_URL, // Server URL (must be absolute)
    credentials: 'include', // Additional fetch() options like `credentials` or `headers`
})

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: from([errorLink, httpLink]),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        getSections: concatPagination(),
                    },
                },
            },
        }),
    })
}

export const client = createApolloClient()


export const useQuery = (query, options) => {
    const [result, setResult] = useState({});

    const handleTriggerQuery = async () => {
        const res = await client.query({ query: query, ...options });
        setResult(res);
    }

    useEffect(() => {
        handleTriggerQuery()
    }, [query, options])

    return result;
}
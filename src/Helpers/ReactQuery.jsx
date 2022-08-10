import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

const ReactQuery = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ReactQuery ;
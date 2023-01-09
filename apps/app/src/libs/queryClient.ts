import { QueryClient } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 3 } },
})

export default queryClient

import { Outlet, useSearchParams } from "react-router-dom"

export const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
          <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button> 
          <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {
          showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing all users</h2>
      }
    </div>
  )
}


// useSearchParams will behave same as useState hook in react
// the hook returns two values the first one is which we will going to call as searchParams
// and the second value returned is a function to set searchParams
// using setSearchParams we can add or remove parameter
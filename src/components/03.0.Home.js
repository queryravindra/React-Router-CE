// racf

// export const Home = () => {
//   return <div>Home Page</div>
// }

// 6.Navigating Programatically
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary', { replace: true })}>Place Order</button>
    </>
  )
}

// To navigate programatically React Router provides the useNavigate hook
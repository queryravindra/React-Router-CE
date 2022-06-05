// Order-Summary
import { useNavigate } from "react-router-dom";

export const NavigProg = () => {
  const navigate = useNavigate();

  return (
      <>
          <div>Order Confirmed!</div>
          <button onClick={() => navigate(-1)}>Go back</button>
      </>
  );
}



// Let us suppose order confirmation or oder-placed is typically happens after an event is successful ie., clicking button or link
// 
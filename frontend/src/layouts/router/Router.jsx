import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Auth from "../Auth";
import Home from "../Home";
import Signup from "../Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Auth />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/post" element={<Home />} />
    </Route>
  )
);

export default router;

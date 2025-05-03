import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Auth from "./components/layouts/Auth";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Movie from "./components/layouts/Movie";
import AllMovie from "./pages/Movie/AllMovie";
import MovieDetail from "./pages/Movie/MovieDetail";
import MovieOrder from "./pages/Movie/MovieOrder";
import Error from "./pages/Error";
import Payment from "./pages/Orders/Payment";
import ResultPayment from "./pages/Orders/ResultPayment";
import PrivateRoute from "./components/fragments/PrivateRoute";
import ProfileLayout from "./components/layouts/MainProfile";
import MainProfile from "./components/layouts/MainProfile";
import Profile from "./pages/Profile/index";
import PublicRoute from "./components/fragments/PublicRoute";
import Admin from "./pages/Admin/index";
import MovieAdmin from "./pages/Admin/Movie";
import AddMovie from "./pages/Admin/AddMovie";

function router() {
  return (
    <Routes>
      {/* nested */}
      <Route path="auth" element={<Auth />}>
        <Route
          index
          element={
            <PublicRoute redirectTo={"/"}>
              <SignIn />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="new"
          element={
            <PublicRoute redirectTo={"/"}>
              <SignUp />
            </PublicRoute>
          }
        ></Route>
      </Route>
      {/* layout */}
      <Route element={<Movie />}>
        <Route index element={<LandingPage />} />
        {/* nested */}

        <Route path="movie">
          <Route index element={<AllMovie />}></Route>
          <Route path=":id" element={<MovieDetail />}></Route>
        </Route>
        <Route path="order">
          {/* <Route index element={<Error />}></Route> */}
          <Route index element={<MovieOrder />}></Route>
          {/* prefix */}
        </Route>
        <Route path="payment">
          <Route
            index
            element={
              <PrivateRoute redirectTo={"/auth"}>
                <Payment />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="succes"
            element={
              <PrivateRoute redirectTo={"/auth"}>
                <ResultPayment />
              </PrivateRoute>
            }
          ></Route>
        </Route>

        {/* prefix */}
      </Route>
      <Route element={<MainProfile />}>
        <Route
          path="profile"
          element={
            <PrivateRoute redirectTo={"/auth"}>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
      </Route>
      <Route path="admin">
        <Route element={<Admin />} index></Route>
        <Route path="movie">
          <Route element={<MovieAdmin />} index />
          <Route element={<AddMovie />} path="new" />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default router;

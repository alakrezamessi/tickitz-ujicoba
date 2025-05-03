import { Navigate, useLocation } from "react-router";

import { useSelector } from "react-redux";

function PublicRoute({ children, redirectTo }) {
  // const { auth } = useContext(authContext);
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  // console.log(auth.isLogin);
  // case 1: belum login
  if (auth.isLogin) {
    return (
      <Navigate to={redirectTo} replace state={{ from: location.pathname }} />
    );
  }

  // case 2: role tidak cocok
  // case 3: sudah login (buat komponen baru)

  return children;
}

export default PublicRoute;

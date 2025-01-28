import { Navigate } from "react-router-dom";

const PrivateRoute = (props: { children: React.ReactNode }): JSX.Element => {
    const { children } = props
    const isLoggedIn: boolean = localStorage.getItem('logged_user') !== null;
  
    return isLoggedIn ? (
      <>{children}</>
    ) : (
      <Navigate replace={true} to="/login" />
    )
  }

  export default PrivateRoute;

  
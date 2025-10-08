import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";
import { useEffect } from "react";

const AuthLayout = () => {
  const navigate = useNavigate();
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isCheckingAuth && authUser) {
      navigate("/");
    }
  }, [isCheckingAuth, authUser, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;

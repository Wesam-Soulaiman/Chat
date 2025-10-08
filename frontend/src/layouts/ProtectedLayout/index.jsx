import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";
import PageLoader from "../../components/PageLoader";

export default function ProtectedLayout() {
  const navigate = useNavigate();
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isCheckingAuth && !authUser) {
      navigate("/login");
    }
  }, [isCheckingAuth, authUser, navigate]);

  if (isCheckingAuth) return <PageLoader />;

  return <Outlet />;
}

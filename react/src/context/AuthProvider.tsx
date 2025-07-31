import { authClient } from "@/lib/auth-client";
import { useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import { useEffect } from "react";

type ProtectedProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: ProtectedProps) {
  const navigate = useNavigate();
  const { data, error, isPending, refetch } = authClient.useSession();
  console.log(authClient.useSession());

  useEffect(() => {
    if (!isPending && !data && !error) {
      navigate("/login", { replace: true });
    }
  }, [data, error, isPending, navigate]);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <AuthContext value={{ session: data, refreshSession: refetch }}>
      {children}
    </AuthContext>
  );
}

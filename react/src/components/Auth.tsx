import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Auth() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  const navigate = useNavigate();
  console.log(session);

  useEffect(() => {
    if (!isPending && !session?.session.token) {
      // console.log("session", session.session.token);
      navigate("/login");
    }
  }, [session, navigate, isPending]);

  return (
    <h1 className="w-full text-9xl h-screen flex flex-col items-center justify-center px-4">
      User is logged in
    </h1>
  );
}

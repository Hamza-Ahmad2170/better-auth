import { useAuth } from "@/context/AuthContext";

function Protected() {
  const { session, refreshSession } = useAuth();
  return (
    <div>
      <h1 className="font-semibold text-4xl ">Protected</h1>
      <button
        type="button"
        onClick={() => refreshSession()}
        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        refetch session
      </button>
    </div>
  );
}
export default Protected;

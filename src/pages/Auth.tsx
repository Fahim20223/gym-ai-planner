import { AuthView } from "@neondatabase/neon-js/auth/react";
import { useParams } from "react-router-dom";

export default function Auth() {
  const { pathname } = useParams();
  return (
    <div className="flex justify-center items-center min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-md w-full">
        <AuthView pathname={pathname} />
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "Resumind | Auth" },
  { name: "description", content: "Log into your Account" },
];

const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          {/* <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcom</h1>
            <h2>Log In to continue Your job journey</h2>
          </div> */}
          <div>
            {isLoading ? (
              <div className="flex flex-col items-center gap-2 text-center">
                <h1>logging in</h1>
                <h2>Please wait while loging in !!!!</h2>
                <button className="auth-button animate-pulse">
                  <p>Signing you in...</p>
                </button>
              </div>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <div className="flex flex-col items-center gap-2 text-center">
                    <h1>Logout ?</h1>
                    <h2>Are you sure you want to logout</h2>
                    <button className="auth-button " onClick={auth.signOut}>
                      <p>log Out</p>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-center">
                    <h1>Login</h1>
                    <h2>Log In to continue Your job journey</h2>
                    <button className="auth-button " onClick={auth.signIn}>
                      <p>Login</p>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;

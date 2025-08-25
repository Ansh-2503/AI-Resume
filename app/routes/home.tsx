import Navbar from "~/Components/Navbar";
import ResCard from "~/Components/ResCard";
import type { Route } from "./+types/home";
import { resumes } from "~/Constants";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI_Resume" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Application & Resume Ratings</h1>
          <h2>Review your submission and check AI-powered feedback</h2>
        </div>

        {resumes.length > 0 && (
          <div className="flex justify-center">
            <div className="resumes-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 py-8">
              {resumes.map((resume) => (
                <ResCard key={resume.id} resume={resume} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
        ERROR
      </p>
      <h1 className="font-display font-black uppercase leading-none text-[12vw] text-text mb-8 select-none">
        404
      </h1>
      <p className="font-mono text-sm text-muted-foreground mb-10">
        {error?.statusText || error?.message || "An unexpected error occurred."}
      </p>
      <Link
        to="/home"
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent border-b border-transparent hover:border-accent pb-0.5 transition-colors"
      >
        RETURN HOME ↗
      </Link>
    </div>
  );
}

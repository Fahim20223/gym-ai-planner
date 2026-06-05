import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <Dumbbell></Dumbbell>
          <span>GymAI</span>
        </Link>
      </div>
    </header>
  );
}

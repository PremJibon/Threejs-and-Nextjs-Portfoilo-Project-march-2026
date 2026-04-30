import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Wrench, ExternalLink, Gamepad2 } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const PremiumCard = ({ name, description, date, demoLink, type }) => {
  return (
    <motion.div
      variants={item}
      className="group relative w-full max-w-2xl"
    >
      <Link
        href={demoLink}
        target="_blank"
        className="block p-1 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent hover:from-accent/50 transition-all duration-500"
      >
        <div className="relative bg-background/80 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-accent/10 group-hover:border-accent/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                {type === "course" ? (
                  <BookOpen size={24} />
                ) : type === "game" ? (
                  <Gamepad2 size={24} />
                ) : (
                  <Wrench size={24} />
                )}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {name}
                </h3>
                <p className="text-muted mt-2 line-clamp-2">{description}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 self-end md:self-center">
              <span className="text-xs font-mono text-muted uppercase tracking-widest">
                {new Date(date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
              </span>
              <div className="p-2 rounded-full border border-accent/20 group-hover:border-accent/60 group-hover:bg-accent/10 transition-all">
                <ExternalLink size={18} className="text-accent" />
              </div>
            </div>
          </div>
          
          {/* Decorative glow */}
          <div className="absolute -inset-0.5 bg-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PremiumCard;

import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

interface NavItem {
  href: string;
  label: string;
  isLink?: boolean;
}

const navItems: NavItem[] = [
  // { href: "#projects", label: "Projects" },
  // { href: "#timeline", label: "Timeline" },
  // { href: "#contact", label: "Contact" },
  // { href: "/blog", label: "Blog", isLink: true },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isLink?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isLink }) =>
  isLink ? (
    <Link to={href} className="text-gray-800 dark:text-gray-200">
      <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {children}
      </motion.p>
    </Link>
  ) : (
    <motion.a
      href={href}
      className="text-gray-800 dark:text-gray-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center px-6 py-4">
      <Link to="/">
        <p className="text-2xl font-bold text-gray-800 dark:text-white">
          <span className="hover:text-gray-700 dark:hover:text-gray-300">
            {location.pathname !== "/" ? "Daniel Escoto" : ""}
          </span>
          {location.pathname.includes("/blog") && (
            <Link to="/blog">
              <span className="text-gray-500 dark:text-gray-400 italic font-light hover:text-gray-700 dark:hover:text-gray-300">
                /blog
              </span>
            </Link>
          )}
        </p>
      </Link>
      <nav className="flex space-x-4">
        {location.pathname === "/" &&
          navItems.map(({ href, label, isLink }) => (
            <NavLink key={href} href={href} isLink={isLink}>
              {label}
            </NavLink>
          ))}
      </nav>
    </header>
  );
}

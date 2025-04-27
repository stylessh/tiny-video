import { Logo } from "../ui/logo";

import { SOCIAL_LINKS } from "@/app/constants";
import { GithubIcon, XTwitterIcon } from "../ui/icons";
import Link from "next/link";

const icons: Record<string, React.ReactNode> = {
  github: <GithubIcon className="size-4" />,
  X: <XTwitterIcon className="size-4" />,
};

export function Header() {
  return (
    <header className="flex items-center justify-between text-center p-4">
      <Logo className="size-12" />

      <nav>
        <ul className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                className="bg-neutral-100 px-4 py-1 rounded-full hover:bg-neutral-200 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

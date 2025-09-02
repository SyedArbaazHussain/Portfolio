import React from "react";

type Contact = {
  label: string;
  href: string;
};

const CONTACTS: Contact[] = [
  { label: "Github", href: "https://github.com/SyedArbaazHussain/" },
  { label: "Email", href: "mailto:arbaaz14122002@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/syed-arbaaz-hussain-7267ab228" },
  { label: "Twitter", href: "https://x.com/_arbxxz_" },
  { label: "Discord", href: "https://discord.com/users/958402736670531585" },
  { label: "Instagram", href: "https://www.instagram.com/_.arbxxz_" },
  { label: "Telegram", href: "https://t.me/itsmenaughtyboy" }
];


const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Syed Arbaaz Hussain. All rights
          reserved.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-5">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-indigo-800 dark:text-blue-500 hover:text-white"
              aria-label={c.label}
            >
              {c.label}
            </a>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-xs font-bold text-indigo-800 dark:text-blue-500">
            Designed and developed by Syed Arbaaz Hussain
          </p>
        </div>
      </div>      
    </footer>
  );
};

export default Footer;
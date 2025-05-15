'use client';

import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Abordagens", href: "#abordagens" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <div>
          <span className="font-semibold text-xl text-primary">Vanessa Joia</span>
          <span className="ml-2 text-sm text-gray-600">Psicóloga | CRP 00/00000</span>
        </div>
        <Disclosure as="div" className="md:hidden">
          {({ open, close }) => (
            <>
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent-1 focus:outline-none">
                {open ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="absolute top-full left-0 w-full bg-background shadow-md z-50">
                <div className="flex flex-col py-2 px-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => close()}
                      className="py-2 text-primary hover:text-accent-1 font-medium transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary hover:text-accent-1 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
} 
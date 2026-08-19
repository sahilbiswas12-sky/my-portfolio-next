"use client";

import { useId, useState } from "react";

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Disclosure({
  title,
  children,
  defaultOpen = false,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className="max-w-xl rounded-lg border border-gray-300">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((current) => !current)}
          className="flex w-full items-center justify-between p-4 text-left font-semibold"
        >
          <span>{title}</span>

          <span aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        hidden={!isOpen}
        className="border-t border-gray-300 p-4"
      >
        {children}
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import Modal from "./Modal";
import Tabs from "./Tabs";
import Disclosure from "./Disclosure";

const tabs = [
  {
    id: "about",
    label: "About",
    content: <p>This is the About tab.</p>,
  },
  {
    id: "skills",
    label: "Skills",
    content: <p>This is the Skills tab.</p>,
  },
  {
    id: "projects",
    label: "Projects",
    content: <p>This is the Projects tab.</p>,
  },
];

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen space-y-12 p-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">
          Accessibility Playground
        </h1>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          Open Modal
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
        >
          <p>
            This is a modal dialog built from scratch using React and
            TypeScript.
          </p>
        </Modal>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          Tabs
        </h2>

        <Tabs tabs={tabs} />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          Disclosure
        </h2>

        <Disclosure title="What technologies do you use?">
          <p>
            I work with React, TypeScript, Next.js, Node.js, Express,
            MongoDB, and modern web development tools.
          </p>
        </Disclosure>
      </section>
    </main>
  );
}
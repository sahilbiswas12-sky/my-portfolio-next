"use client";

import { useId, useRef, useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();

  const getTabId = (index: number) => `${baseId}-tab-${index}`;
  const getPanelId = (index: number) => `${baseId}-panel-${index}`;

  const focusTab = (index: number) => {
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % tabs.length;
        break;

      case "ArrowLeft":
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = tabs.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    focusTab(nextIndex);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Example tabs"
        className="flex gap-2 border-b"
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={getTabId(index)}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={getPanelId(index)}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`px-4 py-2 ${
                isActive
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={getPanelId(activeIndex)}
        role="tabpanel"
        aria-labelledby={getTabId(activeIndex)}
        tabIndex={0}
        className="p-4"
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}
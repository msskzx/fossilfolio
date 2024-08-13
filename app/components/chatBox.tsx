"use client";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface ChatBoxProps {
  title: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isOpen && (
          <div className="w-80 h-96 p-4 shadow-lg rounded-lg flex flex-col bg-gray-100 dark:bg-gray-900 dark:border-neutral-700 opacity-100 ">
            <div className="text-xl font-semibold mb-2">{title}</div>
            <div className="flex-grow overflow-y-auto ">
              <p>Hei! I can answer your questions about the projects I worked on!</p>
            </div>
          </div>
        )}
        <div className="block group w-20 h-20 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <button
            onClick={toggleChatBox}
            className="rounded-full flex items-center justify-center shadow-lg text-4xl"
          >
            <FontAwesomeIcon icon={faRobot} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

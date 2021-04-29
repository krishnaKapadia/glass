/** @format */
import React, { FunctionComponent, useState, useCallback } from "react";
import ContentEditable from "react-contenteditable";

import { getTime } from "../../utils";
import { WorkItem } from "../../models";

import "./style.css";

type Props = {
  data: WorkItem;
  updateData: (item: WorkItem) => void;
};

export const WorkCard: FunctionComponent<Props> = ({ data, updateData }) => {
  const [name, setName] = useState(data.name || "");
  const [description, setDescription] = useState(data.description || "");
  const onBlur = useCallback(() => updateData(data), [data.id]);

  return (
    <div className="bg-white mb-4 p-2 pl-4 pr-4 rounded-md w-full">
      <header>
        <ContentEditable
          className="text-lg font-normal mb-2 w-full"
          html={name}
          disabled={false}
          onChange={(e) => setName(e.target.value)}
          onBlur={onBlur}
        />
      </header>

      <ContentEditable
        className="text-gray-400"
        html={description}
        disabled={false}
        onChange={(e) => setDescription(e.target.value)}
        onBlur={onBlur}
      />

      <footer className="flex justify-end mt-2 p-2">
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <p className="text-black ml-2">{getTime(data.dateCreated)}</p>
        </div>
      </footer>
    </div>
  );
};

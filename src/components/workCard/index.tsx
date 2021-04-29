/** @format */
import React, { FunctionComponent, useState, useCallback } from "react";
import ContentEditable from "react-contenteditable";
import { Draggable } from "react-beautiful-dnd";

import { getTime } from "../../utils";
import { WorkItem } from "../../models";

import "./style.css";

type Props = {
  index: number;
  data: WorkItem;
  updateData: (item: WorkItem) => void;
};

export const WorkCard: FunctionComponent<Props> = ({
  data,
  updateData,
  index,
}) => {
  const [isEditing, setEditing] = useState(false);

  const [name, setName] = useState(data.name || "");
  const [description, setDescription] = useState(data.description || "");
  const onBlur = useCallback(() => {
    updateData(data);
    setEditing(false);
  }, [data.id]);

  const onFocus = () => {
    if (!isEditing) {
      setEditing(true);
    }
  };

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          className="bg-white mb-4 p-2 pl-4 pr-4 rounded-md w-full"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <header>
            <ContentEditable
              className="text-lg font-normal mb-2 w-full"
              html={name}
              disabled={false}
              onChange={(e) => setName(e.target.value)}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={"Enter a title"}
            />

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg> */}
          </header>

          <ContentEditable
            className="text-gray-400"
            html={description}
            disabled={false}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={"Enter a description"}
          />

          <footer
            className="flex justify-between align-center mt-2"
            style={{ height: "44px" }}
          >
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

            {isEditing && (
              <button className="h-10 px-5 text-gray-800 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-200">
                Save
              </button>
            )}
          </footer>
        </div>
      )}
    </Draggable>
  );
};

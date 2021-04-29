/** @format */

import React, { FunctionComponent } from "react";
import { WorkItem } from "../../models";

type Props = {
  title: string;
  addItem?: (item?: WorkItem) => void;
};

export const Section: FunctionComponent<Props> = ({
  title,
  addItem,
  children,
}) => {
  return (
    <section className="bg-blue-100 bg-opacity-25 rounded-xl p-4">
      <h1 className="text-xl font-semibold pb-4">{title}</h1>
      {!!addItem && (
        <button
          className="add-item-btn w-full bg-blue-100 flex justify-center p-3 rounded-xl hover:bg-blue-200 focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            addItem();
          }}
        >
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      )}

      <div className="flex flex-row mt-4">{children}</div>
    </section>
  );
};

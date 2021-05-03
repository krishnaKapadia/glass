/** @format */
import React, { FunctionComponent, useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { DragDropContext } from "react-beautiful-dnd";
import { isNil } from "lodash";

import { WorkCard } from "../../components/workCard";
import { Section } from "../../components/section";

import * as API from "../../api";
import * as Models from "../../models";

export const Overview: FunctionComponent = () => {
  const createWorkItemMutation = useMutation(API.createWorkItem);
  const updateWorkItemMutation = useMutation(API.updateWorkItem);
  const moveItemMutation = useMutation(API.moveItem);

  const [data, setData] = useState<Models.Section[]>();

  let { data: queryData, isLoading, refetch } = useQuery(
    ["sections"],
    API.getSections
  );

  useEffect(() => {
    setData(queryData);
    console.log("LATEST", data);
  });

  const createWorkItem = () =>
    createWorkItemMutation
      .mutateAsync((data as any)[0].id)
      .then(() => refetch());

  const updateWorkItem = (item: Models.WorkItem) =>
    updateWorkItemMutation.mutateAsync(item).then(() => refetch());

  const moveWorkItem = (item: Models.WorkItem, targetSectionId: string) =>
    moveItemMutation
      .mutateAsync({ item, targetSectionId })
      .then(() => refetch());

  const date = new Date(Date.now());
  const formattedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

  if (isLoading || !!!data) {
    return null;
  }

  const onDragEnd = (res: any) => {
    const { destination, source, draggableId } = res;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const currentSection = data.find((d) => d.id === source.droppableId);
    const targetSection = data.find((d) => d.id === destination.droppableId);

    if (isNil(currentSection) || isNil(targetSection)) {
      return;
    }

    const workItem = currentSection!.items.find((i) => i.id == draggableId);

    if (source.droppableId !== destination.droppableId && workItem) {
      moveWorkItem(workItem, targetSection!.id);
      refetch();
    }
  };

  return (
    <div className="h-full p-8">
      <header className="pb-8">
        <div
          className="prose lg:prose-x flex flex-col min-w-320 h-full"
          style={{ maxWidth: "420px" }}
        >
          <h2 className="h2 font-sans">Overview - {formattedDate}</h2>
        </div>
      </header>

      <DragDropContext onDragEnd={onDragEnd}>
        <Section id={data[0].id} title={data[0].title} addItem={createWorkItem}>
          {data[0].items.map((d, idx) => (
            <div
              key={d.id}
              className={`w-full md:w-1/2 ${
                idx % 2 ? "pl-0 md:pl-2" : "pr-0 md:pr-2"
              }`}
            >
              <WorkCard index={idx} data={d} updateData={updateWorkItem} />
            </div>
          ))}
        </Section>

        <h2 className="text-3xl mt-6 mb-4 font-semibold">Schedule</h2>

        <div className="flex flex-wrap flex-row justify-between">
          {data.slice(1).map(({ id, items, title }) => (
            <div key={id} className="w-full md:w-1/2 pl-0 md:pl-2 mb-4">
              <Section
                id={id}
                title={title}
                // addItem={createWorkItem}
              >
                {items.map((d, idx) => (
                  <div
                    key={d.id}
                    className={`w-full lg:w-1/2 ${
                      idx % 2 ? "pl-0 lg:pl-2" : "pr-0 lg:pr-2"
                    }`}
                  >
                    <WorkCard
                      index={idx}
                      data={d}
                      updateData={updateWorkItem}
                    />
                  </div>
                ))}
              </Section>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

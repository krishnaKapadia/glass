/** @format */
import React, { FunctionComponent } from "react";
import { useQuery, useMutation } from "react-query";

import { WorkCard } from "../../components/workCard";
import { Section } from "../../components/section";

import * as API from "../../api";
import { WorkItem } from "../../models";

export const Overview: FunctionComponent = () => {
  const { data, isLoading, refetch } = useQuery(["appData"], API.getData);

  const createWorkItemMutation = useMutation(API.createWorkItem);
  const updateWorkItemMutation = useMutation(API.updateWorkItem);

  const createWorkItem = () => {
    console.log("creation triggered");
    createWorkItemMutation.mutateAsync(undefined).then(() => refetch());
  };

  const updateWorkItem = (item: WorkItem) => {
    updateWorkItemMutation.mutateAsync(item).then(() => refetch());
  };

  const date = new Date(Date.now());
  const formattedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

  if (isLoading) {
    return null;
  }

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

      <Section title="Things..." addItem={createWorkItem}>
        <div className="flex flex-wrap flex-row md:flex-column justify-between mt-4 w-full">
          {data?.map((d, idx) => (
            <div
              key={d.id}
              className={`w-full md:w-1/2 ${
                idx % 2 ? "pl-0 md:pl-2" : "pr-0 md:pr-2"
              }`}
            >
              <WorkCard data={d} updateData={updateWorkItem} />
            </div>
          ))}
        </div>
      </Section>

      <h2 className="text-3xl mt-6 mb-4 font-semibold">Schedule</h2>

      <div className="flex flex-wrap flex-row justify-between">
        <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4">
          <Section title="9:00 - 10:30">{/* <WorkCard /> */}</Section>
        </div>

        <div className="w-full md:w-1/2 pl-0 md:pl-2 mb-4">
          <Section title="10:30 - 12:00">{/* <WorkCard /> */}</Section>
        </div>

        <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4">
          <Section title="1:00 - 2:30">{/* <WorkCard /> */}</Section>
        </div>

        <div className="w-full md:w-1/2 pl-0 md:pl-2 mb-4">
          <Section title="2:30 - 5:00">{/* <WorkCard /> */}</Section>
        </div>
      </div>
    </div>
  );
};

/** @format */
import * as Models from "../models";
import * as Utils from "../utils";
import { data } from "./data";
import { WorkItem } from "../models/index";

function createEmptyItem(sectionId: string): Models.WorkItem {
  return {
    id: Utils.generateGuid(),
    name: "",
    description: "",
    dateCreated: new Date(Date.now()),
    sectionId,
  };
}

export async function getSections(): Promise<Models.Section[]> {
  return new Promise((res) => res(Object.values(data)));
}

export async function createWorkItem(sectionId: string): Promise<boolean> {
  return new Promise((res) => {
    const workItem = createEmptyItem(sectionId);
    data[sectionId].items.push(workItem);
    res(true);
  });
}

export async function updateWorkItem(item: Models.WorkItem): Promise<boolean> {
  return new Promise((res) => {
    const section = { ...data[item.sectionId] };
    const workItems = section.items;

    workItems.splice(workItems.indexOf(item), 1);

    workItems.push(item);
    data[item.sectionId] = section;
    res(true);
  });
}

type MoveItemParams = {
  item: WorkItem;
  targetSectionId: string;
};

export async function moveItem({
  item,
  targetSectionId,
}: MoveItemParams): Promise<boolean> {
  console.log("moved");

  return new Promise((res) => {
    const origin = { ...data[item.sectionId] };
    origin.items = origin.items.filter((i) => i.id !== item.id);
    item.sectionId = targetSectionId;

    data[origin.id] = origin;
    data[targetSectionId].items.push(item);

    res(true);
  });
}

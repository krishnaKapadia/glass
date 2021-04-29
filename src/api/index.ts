/** @format */
import { WorkItem } from "../models";
import * as Utils from "../utils";
import { data } from './data';

function createEmptyItem(order: number): WorkItem {
  return {
    id: Utils.generateGuid(),
    name: "",
    description: "",
    dateCreated: new Date(Date.now()),
    sectionId: "0",
    order
  };
}

export async function getData(): Promise<WorkItem[]> {
  return new Promise((res) => res(Object.values(data).sort((a, b) => a.order > b.order ? 1 : -1)));
}

export async function createWorkItem(): Promise<boolean> {
  return new Promise((res) => {
    const workItem = createEmptyItem(Math.max((data as any).length - 1, 0));
    data[workItem.id] = workItem;
    res(true);
  });
}

export async function updateWorkItem(item: WorkItem): Promise<boolean> {
  console.log(data, "test", item);

  return new Promise((res) => {
    data[item.id] = item;
    console.log(data);
    res(true);
  });
}

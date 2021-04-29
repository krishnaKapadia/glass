/** @format */
import { WorkItem } from "../models";
import * as Utils from "../utils";
import { data } from './data';

function createEmptyItem(): WorkItem {
  return {
    id: Utils.generateGuid(),
    name: "",
    description: "",
    dateCreated: new Date(Date.now()),
    sectionId: "0",
  };
}

export async function getData(): Promise<WorkItem[]> {
  return new Promise((res) => res(Object.values(data)));
}

export async function createWorkItem(): Promise<boolean> {
  return new Promise((res) => {
    const workItem = createEmptyItem();
    data[workItem.id] = workItem;
    res(true);
  });
}

export async function updateWorkItem(item: WorkItem): Promise<boolean> {
  return new Promise((res) => {
    data[item.id] = item;
    res(true);
  });
}

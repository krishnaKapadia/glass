/** @format */
import { WorkItem } from "../models";
import * as Utils from "../utils";
import { data } from './data';

const emptyWorkItem: WorkItem = {
  id: Utils.generateGuid(),
  name: "Enter task name...",
  description: "Enter description...",
  dateCreated: new Date(Date.now()),
  sectionId: "0",
};

export async function getData(): Promise<WorkItem[]> {
  return new Promise((res) => res(Object.values(data)));
}

export async function createWorkItem(): Promise<boolean> {
  return new Promise((res) => {
    const id = emptyWorkItem.id;
    data[id] = emptyWorkItem;
    res(true);
  });
}

export async function updateWorkItem(item: WorkItem): Promise<boolean> {
  return new Promise((res) => {
    data[item.id] = item;
    res(true);
  });
}

/** @format */
import { WorkItem } from "../models";

import * as Utils from "../utils";

type Data = {
  [key: string]: WorkItem;
};

const id1 = Utils.generateGuid();
const id2 = Utils.generateGuid();

const data: Data = {
  "948e0e62-557b-4021-8bec-1ea4e951851a": {
    id: "948e0e62-557b-4021-8bec-1ea4e951851a",
    name: "Web app - Service worker",
    description:
      "We need 2 different concepts for the new homepage that we want to push out to our clients. They are 3 things here: 1. Drive 2. Systems 3. Goals",
    dateCreated: new Date(Date.now()),
    sectionId: "0",
  },
  "948e0e62-557b-4021-8bec-1ea4e951851b": {
    id: "948e0e62-557b-4021-8bec-1ea4e951851b",
    name: "Web app - Service worker",
    description:
      "We need 2 different concepts for the new homepage that we want to push out to our clients. They are 3 things here: 1. Drive 2. Systems 3. Goals",
    dateCreated: new Date(Date.now()),
    sectionId: "0",
  },
};

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

export async function createWorkItem(item?: WorkItem): Promise<boolean> {
  return new Promise((res) => {
    const id = Utils.generateGuid();
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

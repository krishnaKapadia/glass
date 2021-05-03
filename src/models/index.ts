/** @format */

export type WorkItem = {
  id: string;
  name: string;
  description: string;
  dateCreated: Date;

  sectionId: string;
};

export type Section = {
  id: string;
  title: string;
  items: WorkItem[];
};

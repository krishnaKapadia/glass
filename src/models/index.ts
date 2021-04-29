/** @format */

export type WorkItem = {
  id: string;
  name: string;
  description: string;
  dateCreated: Date;

  sectionId: string;
  order: number;
};

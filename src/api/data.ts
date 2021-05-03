/** @format */
import * as Models from "../models";
import * as Utils from "../utils/";

const sectionOneId = Utils.generateGuid();
export const sectionOne: Models.Section = {
  id: sectionOneId,
  title: "Things...",
  items: [
    {
      id: Utils.generateGuid(),
      name: "Web app - Service worker 1",
      description:
        "We need 2 different concepts for the new homepage that we want to push out to our clients. They are 3 things here: 1. Drive 2. Systems 3. Goals",
      dateCreated: new Date(Date.now()),
      sectionId: sectionOneId,
    },
    // {
    //   id: "948e0e62-557b-4021-8bec-1ea4e951851b",
    //   name: "Web app - Service worker 123",
    //   description:
    //     "We need 2 different concepts for the new homepage that we want to push out to our clients. They are 3 things here: 1. Drive 2. Systems 3. Goals",
    //   dateCreated: new Date(Date.now()),
    //   sectionId: sectionOneId,
    // },
  ],
};

const sectionTwoId = Utils.generateGuid();
export const sectionTwo: Models.Section = {
  id: sectionTwoId,
  title: "9:00 - 10:30",
  items: [
    // {
    //   id: "948e0e62-557b-4021-8bec-1ea4e951851c",
    //   name: "Web app - Service worker 123",
    //   description:
    //     "We need 2 different concepts for the new homepage that we want to push out to our clients. They are 3 things here: 1. Drive 2. Systems 3. Goals",
    //   dateCreated: new Date(Date.now()),
    //   sectionId: sectionTwoId,
    // },
  ],
};

const sectionThreeId = Utils.generateGuid();
export const sectionThree: Models.Section = {
  id: sectionThreeId,
  title: "10:30 - 12:00",
  items: [
    {
      id: Utils.generateGuid(),
      name: "Web app - Service worker 2",
      description:
        "We need 2 different concepts for the new homepage that we want to push out to our clients. They are 3 things here: 1. Drive 2. Systems 3. Goals",
      dateCreated: new Date(Date.now()),
      sectionId: sectionThreeId,
    },
  ],
};

const sectionFourId = Utils.generateGuid();
export const sectionFour: Models.Section = {
  id: sectionFourId,
  title: "1:00 - 3:00",
  items: [],
};

const sectionFiveId = Utils.generateGuid();
export const sectionFive: Models.Section = {
  id: sectionFiveId,
  title: "3:00 - 5:00",
  items: [],
};

export const data: { [id: string]: Models.Section } = {
  [`${sectionOneId}`]: sectionOne,
  [`${sectionTwoId}`]: sectionTwo,
  [`${sectionThreeId}`]: sectionThree,
  [`${sectionFourId}`]: sectionFour,
  [`${sectionFiveId}`]: sectionFive,
};

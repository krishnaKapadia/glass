/** @format */
import { WorkItem } from "../models";

type Data = {
    [key: string]: WorkItem;
};

// "948e0e62-557b-4021-8bec-1ea4e951851a": {
//     id: "948e0e62-557b-4021-8bec-1ea4e951851a",
//         name: "Web app - Service worker",
//             description:
//     "We need 2 different concepts for the new homepage that we want to push out to our clients. They are 3 things here: 1. Drive 2. Systems 3. Goals",
//         dateCreated: new Date(Date.now()),
//             sectionId: "0",
//     },

export const data: Data = {
    "948e0e62-557b-4021-8bec-1ea4e951851a": {
        id: "948e0e62-557b-4021-8bec-1ea4e951851a",
        name: "Web app - Service worker 123",
        description:
            "We need 2 different concepts for the new homepage that we want to push out to our clients. They are 3 things here: 1. Drive 2. Systems 3. Goals",
        dateCreated: new Date(Date.now()),
        sectionId: "0",
        order: 0
    },
    "948e0e62-557b-4021-8bec-1ea4e951851b": {
        id: "948e0e62-557b-4021-8bec-1ea4e951851b 879",
        name: "Web app - Service worker",
        description:
            "We need 2 different concepts for the new homepage that we want to push out to our clients. They are 3 things here: 1. Drive 2. Systems 3. Goals",
        dateCreated: new Date(Date.now()),
        sectionId: "0",
        order: 1
    },
};

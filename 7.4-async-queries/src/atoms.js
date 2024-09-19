import { atom, selector } from "recoil";
// Aschronous data queries

// if you know that the default value should come from an atom
// in that case you can write like this

// Define the selector to fetch notifications
export const notifications = selector({
  key: "networkAtom",
  get: async () => {
    const response = await fetch("http://localhost:3000/notifications");

    const data = await response.json();
    console.log(data, "~12");
    return data.data;
  },
});

// export const notifications = atom({
//   key: "networkAtom",
//   default: {
//     network: 4,
//     jobs: 6,
//     messaging: 3,
//     notifications: 3,
//   },
// });

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});

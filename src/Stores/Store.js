import axios from "axios";
import create from "zustand";
import fetchData from "../http/Http";

// return available useStore hook for React Component

const store = create((set) => ({
   // create your zustand store here
   users: null,
   selected: null,
   loading: true,
   error: null,

   fetch: () =>
      fetchData
         .getData("users")
         .then((result) => {
            set({ users: result });
         })
         .then(() => set({ loading: false }))
         .catch((err) => set({ error: err })),

   fetchSelectUser: (id) =>
      fetchData
         .getData("users", id)
         .then((result) => {
            set({ selected: result[0] });
            console.log("sele", result);
         })
         .then(() => set({ loading: false }))
         .catch((err) => set({ error: err })),
}));

export default store;

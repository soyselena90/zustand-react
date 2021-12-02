import axios from "axios";
import create from "zustand";

// return available useStore hook for React Component

const store = create((set) => ({
   // create your zustand store here
   users: null,
   selected: null,
   loading: false,
   error: null,

   fetch: async () => {
      await axios
         .get("https://jsonplaceholder.typicode.com/users")
         .then((result) => {
            set({ users: result.data });
         })
         .catch((err) => set({ error: err }));
   },
   fetchUser: async (id) => {
      await axios
         .get(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then((result) => set({ selected: result.data }))
         .catch((err) => set({ error: err }));
   },
}));

export default store;

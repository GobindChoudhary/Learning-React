import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 25,
      isActive: true,
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
      },
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      age: 30,
      isActive: false,
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        zip: "90001",
      },
    },
    {
      id: 3,
      name: "Charlie Davis",
      email: "charlie@example.com",
      age: 28,
      isActive: true,
      address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
        zip: "60601",
      },
    },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userDelete: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});
export const { userDelete } = userSlice.actions;
export default userSlice.reducer;

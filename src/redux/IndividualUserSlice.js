import {createSlice} from "@reduxjs/toolkit";

const IndividualUsers = [
    {
        userId: 1,
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        email: "john.doe@example.com",
        contactNumber: "1234567890",
        password: "password1",
        address: "123 Main St",
        area: "Downtown",
        governorate: "Cairo",
        type: "Teacher"
    },
    {
        userId: 2,
        firstName: "Jane",
        lastName: "Doe",
        gender: "Female",
        email: "jane.doe@example.com",
        contactNumber: "0987654321",
        password: "password2",
        address: "456 Elm St",
        area: "Uptown",
        governorate: "Alexandria",
        type: "Regular Donor"
    },
]

const initialState = {
    IndividualUsers: IndividualUsers,
};

const IndividualUserSlice = createSlice({
    name: "IndividualUser",
    initialState,
    reducers: {
        addIndUser: (state, action) => {
            const userId = state.IndividualUsers.length + 1;
            const user = {
                userId: userId,
                ...action.payload.user
            };
            state.IndividualUsers.push(user);
        },
        updateIndUser: (state, action) => {
            const user = action.payload.user;
            const index = state.IndividualUsers.findIndex(indUser => indUser.userId === user.userId);
            state.IndividualUsers[index] = user;
        }

    },
});

export const { addIndUser } = IndividualUserSlice.actions;
export default IndividualUserSlice.reducer;
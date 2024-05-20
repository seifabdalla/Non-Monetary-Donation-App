import {createSlice} from "@reduxjs/toolkit";
import {IndividualUsers} from "../model/donor/donors.js"


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
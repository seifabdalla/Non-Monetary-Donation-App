import {createSlice} from "@reduxjs/toolkit";


const OrganizationUsers = [

]

const initialState = {
    OrganizationUsers: OrganizationUsers,
};

const OrganizationUserSlice = createSlice({
    name: "OrganizationUser",
    initialState,
    reducers: {
        addOrgUser: (state, action) => {
            state.OrganizationUsers.push(action.payload.user);
        }
    },
});

export const { addOrgUser } = OrganizationUserSlice.actions;
export default OrganizationUserSlice.reducer;
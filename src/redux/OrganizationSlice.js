import {createSlice} from "@reduxjs/toolkit";


const OrganizationUsers = [
    {
        userId: 1,
        firstName: "Alice",
        lastName: "Smith",
        gender: "Female",
        email: "alice.smith@example.com",
        password: "password1",
        contactNumber: "1234567890",
        organizationName: "Organization 1",
        organizationType: "Non-profit",
        address: "123 Main St",
        area: "Downtown",
        governorate: "Cairo",
    },
    {
        userId: 2,
        firstName: "Bob",
        lastName: "Johnson",
        gender: "Male",
        email: "bob.johnson@example.com",
        password: "password2",
        contactNumber: "0987654321",
        organizationName: "Organization 2",
        organizationType: "For-profit",
        address: "456 Elm St",
        area: "Uptown",
        governorate: "Alexandria",
    },
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
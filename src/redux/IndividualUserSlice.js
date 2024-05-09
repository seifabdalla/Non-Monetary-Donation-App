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
        type: "Teacher",
        location: {
            lat: 40.7128,
            lng: -74.0060,
        }
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
        type: "Doctor",
        location: {
            lat: 39.9526,
            lng: -75.1652,
        }
    },
    {
        userId: 3,
        firstName: "Michael",
        lastName: "Smith",
        gender: "Male",
        email: "michael.smith@example.com",
        contactNumber: "2345678901",
        password: "password3",
        address: "789 Oak St",
        area: "Suburbia",
        governorate: "Giza",
        type: "Teacher",
        location: {
            lat: 34.0522,
            lng: -118.2437,
        }
    },
    {
        userId: 4,
        firstName: "Emily",
        lastName: "Johnson",
        gender: "Female",
        email: "emily.johnson@example.com",
        contactNumber: "3456789012",
        password: "password4",
        address: "101 Pine St",
        area: "Rural",
        governorate: "Luxor",
        type: "Doctor",
        location: {
            lat: 25.6872,
            lng: 32.6396,
        }
    },
    {
        userId: 5,
        firstName: "David",
        lastName: "Williams",
        gender: "Male",
        email: "david.williams@example.com",
        contactNumber: "4567890123",
        password: "password5",
        address: "202 Maple St",
        area: "Urban",
        governorate: "Aswan",
        type: "Teacher",
        location: {
            lat: 24.0889,
            lng: 32.8998,
        }
    }
];

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
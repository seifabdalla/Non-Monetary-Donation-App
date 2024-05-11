import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import IndividualUserReducer from "./redux/IndividualUserSlice";
import OrganizationUserReducer from "./redux/OrganizationSlice";
import {NextUIProvider} from '@nextui-org/react'

const store = configureStore({
    reducer: {
        IndividualUser: IndividualUserReducer,
        OrganizationUser: OrganizationUserReducer
    },
});




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <NextUIProvider>
            <Router />
        </NextUIProvider>
    </Provider>
  </React.StrictMode>,
)

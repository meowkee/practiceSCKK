import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Event from '../pages/Event';
import { EVENT_ROUTE } from "../utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={EVENT_ROUTE} element={<Event />}/>
            <Route path="*" element={<Navigate to={EVENT_ROUTE} />} />
        </Routes>
        
    )
}

export default AppRouter;
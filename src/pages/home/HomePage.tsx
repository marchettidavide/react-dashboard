import React from 'react';
import {LocationSearchInput} from "../../shared/components/LocationSearchInput ";
//import { NavLink } from 'react-router-dom';

export const HomePage: React.FC = () => {
    return <div className="page">
        <div className="page-wrapper">
            <h3 className="title">Home Page</h3>

            <p>
                Nothing to show :)

            </p>
            <LocationSearchInput/>
        </div>
    </div>
};

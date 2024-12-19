// src/components/OverviewCard.jsx
import React from 'react';

const OverviewCard = ({ title, amount }) => {
    return (
        <div className="overview-card bg-gray-800 text-white p-4 rounded-lg shadow-lg transition-transform hover:scale-105">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-xl">{amount}</p>
        </div>
    );
};

export default OverviewCard;
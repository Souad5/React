import React from 'react';
import Card from './Card';

const MapComponent = ({ cardData }) => {
    
    return (
        <div>
            {
                cardData.map((cardLoad) => (
                    <Card key={cardLoad.id} cardLoad={cardLoad} />
                ))
            }
        </div>
    );
};

export default MapComponent;

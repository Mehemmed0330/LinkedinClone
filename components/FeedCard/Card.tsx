import React from 'react';
import CardHeader from './CardHeader';
import Main from './Main';
import Actions from './Actions';

interface CardProps {
    mainText: string; // Changed 'String' to 'string'
}

const Card: React.FC<CardProps> = ({ mainText }) => {
    return (
        <div className='min-h-[80vh] border rounded-lg bg-[white] mb-6 pt-4'>
            <CardHeader />
            <Main detail={mainText} /> {/* Corrected the prop passing */}
            <Actions />
        </div>
    );
}

export default Card;

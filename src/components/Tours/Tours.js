import React from 'react';
import './Tours.scss';
import TourItem from './TourItem/TourItem';
import TOUR_DATA from './TourData';

const Tours = () => {
    const [data, setData] = React.useState(TOUR_DATA);
    const removeTourHandler = id => setData(prevState => prevState.filter(item => item.id !== id));

    return (
        <section className='tour-list'>
            {
                data.map(tour => <TourItem key={tour.id} onRemove={removeTourHandler}{...tour}/>)
            }
        </section>
    );
};

export default Tours;
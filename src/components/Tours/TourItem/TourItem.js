import React from 'react';
import './TourItem.scss';

const TourItem = ({id, city, img, name, info, onRemove}) => {
    const [showInfo, setShowInfo] = React.useState(false);
    return (
        <article className='tour'>
            <div className='img-container'>
                <img src={img} alt={city}/>
                <span className='close-btn' onClick={() => onRemove(id)}>
                    <i className='fas fa-window-close fa-2x'/>
                </span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info <span onClick={() => setShowInfo(showInfo => !showInfo)}>
                    <i className={`fas fa-caret-square-` + (showInfo ? 'up' : 'down')}/>
                </span></h5>
                {
                    showInfo &&
                    <p>{info}</p>
                }

            </div>
        </article>
    );
};

export default TourItem;
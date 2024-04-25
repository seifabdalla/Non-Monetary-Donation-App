import {SemiCircleProgress} from 'react-semicircle-progressbar';
import PropTypes from 'prop-types';

export function StatisticsCircle({title,description,value}){
    return (
        <div className="flex flex-col items-center justify-start w-60 h-80 gap-3">
            <SemiCircleProgress
                percentage={value}
                size={{
                width: 100,
                height: 100,
                }}
                strokeWidth={5}
                strokeColor="#0f0"
                fontStyle = {{fill : 'white'}}
            />
            <h3 className="text-2xl font-medium mb-2">{title}</h3>
            <p className="text-lg font-mono text-center">{description}</p>
        </div>
    );
}

StatisticsCircle.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}
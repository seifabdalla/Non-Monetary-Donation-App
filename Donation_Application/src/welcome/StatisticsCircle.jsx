import {SemiCircleProgress} from 'react-semicircle-progressbar';

export function StatisticsCircle({title,description,value}){
    return (
        <div className="flex flex-col items-center justify-center w-60 h-80 gap-3">
            <SemiCircleProgress
                percentage={value}
                size={{
                width: 150,
                height: 150,
                }}
                strokeWidth={5}
                strokeColor="#0f0"
                fontStyle = {{fill : 'white'}}
            />
            <h3 className="text-2xl font-medium mb-2">{title}</h3>
            <p className="text-lg font-mono">{description}</p>
        </div>
      );
}
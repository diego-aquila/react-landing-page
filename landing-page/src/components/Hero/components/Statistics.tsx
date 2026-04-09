import './statistics.css';

interface StatisticProps {
    data: string;
    description: string;
} 

function Statistic({ data, description }: StatisticProps) {

    return(
        <div className="stats">
            <h2>{data}</h2>
            <p>{description}</p>
        </div>
    );

}

export default Statistic;
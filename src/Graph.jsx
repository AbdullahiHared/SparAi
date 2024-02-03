import { ResponsiveLine } from '@nivo/line';

export default function Graph() {
    const data = [{
            id: 'Dataset',
            data: [
                { x: 'January', y: 30 },
                { x: 'February', y: 30 },
                { x: 'March', y: 10 },
                { x: 'April', y: 25 },
                { x: 'May', y: 35 },
                { x: 'June', y: -20 },
                { x: 'July', y: -35 }
            ],
        },
    ]

    return (
        <div style={{ height: '300px', marginTop: "50px"}}>
            <ResponsiveLine
                data={data}
                margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                curve="natural"
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                enablePoints={false}
                enableGridX={false}
                enableGridY={false}
                enableArea={false}
                colors={{ scheme: 'accent' }}
                enableSlices={false}
            />
        </div>
    );
}
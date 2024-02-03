import { ResponsiveLine } from '@nivo/line';

export default function Graph({monthData}) {

    return (
        <div style={{ height: '300px', marginTop: "50px"}}>
            <ResponsiveLine
                data={monthData}
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
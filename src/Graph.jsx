import { ResponsiveLine } from '@nivo/line';

export default function Graph({monthData, marginBottom = 20, marginTop = 20}) {

    return (
        <div style={{ height: '300px', marginTop: "50px"}}>
            <ResponsiveLine
                data={monthData}
                margin={{ top: marginTop, right: 0, bottom: marginBottom, left: 0 }}
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
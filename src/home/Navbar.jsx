import {ResponsiveLine} from "@nivo/line";

const data = [{
    id: 'Dataset',
    data: [
        { x: 'January', y: -35 },
        { x: 'February', y: -15 },
        { x: 'March', y: 20 },
        { x: 'April', y: 15 },
        { x: 'May', y: 15},
        { x: 'June', y: 10 },
        { x: 'July', y: 5}
    ],
},]

export default function Navbar() {

    return (
        <div style={{height: '300px'}}>
            <ResponsiveLine
                data={data}
                margin={{top: 50, right: 0 ,bottom: 50, left: 0}}
                xScale={{type: 'point'}}
                yScale={{type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false}}
                curve="natural"
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                enableGridX={false}
                enableGridY={false}
                enablePoints={true}
                enableSlices="x"
                sliceTooltip={({slice}) => {
                    return (
                        <div
                            style={{
                                background: 'white',
                                padding: '9px 12px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                        >
                            <strong>{slice.points[0].data.x}</strong>
                            <br/>
                            {slice.points.map((point) => (
                                <div
                                    key={point.id}
                                    style={{
                                        color: point.serieColor,
                                        padding: '3px 0',
                                    }}
                                >
                                    {point.serieId}: {point.data.yFormatted}
                                </div>
                            ))}
                        </div>
                    );
                }}
            />
        </div>
    )
}
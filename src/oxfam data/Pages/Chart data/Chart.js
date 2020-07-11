import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

export default function Chart() {
    const [Covid, setCovid] = useState([
        {
            total_Normal_Fever: 1228,
            total_fever: 12,
            total_high_fever: 1,
            total_drycough: 32,
            total_no_drycough: 1209,
            total_breathe_problem: 25,
            total_tiredness: 219,
            total_no_tiredness: 1022,
            Total_survey_for_covid: 1241

        }
    ])
    let defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'City'
    }


    console.log(Covid);

    return (
        <div>
            <h2>Hello</h2>
            <Bar
                data={Covid}
                options={{
                    title: {
                        display: defaultProps.displayTitle,
                        text: 'Largest Cities In ' + defaultProps.location,
                        fontSize: 25
                    },
                    legend: {
                        display: defaultProps.displayLegend,
                        position: defaultProps.legendPosition
                    }
                }}
            />
        </div>
    )
}

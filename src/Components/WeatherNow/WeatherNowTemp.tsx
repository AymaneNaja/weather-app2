import React from "react";




type Props = {
    temp: number,
    metric: string,
    textSize: string
}
export function WeatherNowTemp({ temp, metric, textSize }: Props) {
    return <div className={`text-${textSize} font-bold text-slate-600 `}>
        <p>
            {metric == 'C' ? temp.toString().substring(0, 2).replace('.', '') : ''}
            {metric == 'F' ? (temp * 1.8).toString().substring(0, 4) : ''}
            {'°' + metric}</p>
    </div>;
}

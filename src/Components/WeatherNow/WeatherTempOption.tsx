import React from "react";


type props = {
    setMetric: React.Dispatch<React.SetStateAction<string>>,
    metric: string
}
export function WeatherTempOption({
    setMetric,
    metric
}: props) {
    return <div className={'flex justify-center font-bold gap-3'}>
        <button onClick={() => setMetric('C')} className={metric == 'C' ? `bg-slate-700 text-center justify-center p-2 items-center rounded-full text-slate-200 text-sm hover:bg-slate-500 transition-all` : `bg-slate-200 text-center justify-center p-2 items-center rounded-full text-sm transition-all  hover:bg-slate-300 text-slate-600`}>°C</button>
        <button onClick={() => setMetric('F')} className={metric == 'F' ? `bg-slate-700 text-center justify-center p-2 items-center rounded-full text-slate-200 text-sm hover:bg-slate-500 transition-all` : `bg-slate-200 text-center justify-center p-2 items-center rounded-full text-sm transition-all  hover:bg-slate-300 text-slate-600`}>°F</button>

    </div>;
}

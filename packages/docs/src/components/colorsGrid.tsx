import {colors} from '@ignite-ui-class/tokens'
import {getContrast} from 'polished'
export function ColorsGrid(){
    console.log(colors)
    return Object.entries(colors).map(([key, color]) => (
        <div key={key} style={{padding: '2rem', backgroundColor: color}}>
            <div style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                fontFamily: 'monospace',
                color: getContrast(color,'#fff' ) < 3.5 ? '#000' : '#fff'
                }} 
            >
                <strong>${key}</strong>
                <span>{color}</span>
            </div>
        </div>
    ))
}
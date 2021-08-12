import '../../index.css'
import './Menu.css'
import Select from '../select/Select.jsx'
import garbage from '../../images/garbage.svg'
import date from '../../images/date.svg'

export default function MenuResponsive (props){
    const countries = ["Cualquier País","Argentina","Brasil","Chile","Uruguay"];
    const price =["Cualquier Precio","Económico","Confort","Lujos","Magnífico"];
    const size =["Cualquier Tamaño","pequeño","mediano","grande"]

    return (
        <div className="information">
            <ul className="flex-form">
                <li className="place"><img src={date} alt="seleccion fecha de llegada" className="date"/><input onChange={props.onChangeCheckIn} value = {props.checkIn} type="date" className="input-borderless" placeholder="Cualquier fecha"/></li>
                <li className="place"><img src={date} alt="seleccion fecha de salida" className="date"/><input onChange={props.onChangeCheckOut} value = {props.checkOut} type="date" className="input-borderless" placeholder="Cualquier fecha"/></li>
                <li className="place"><Select list={countries} value={props.country} newCountry={props.onChangeCountry}/></li>
                <li className="place"><Select list={price} value={props.price} newCountry={props.onChangePrice}/></li>
                <li className="place"><Select list={size} value={props.size} newCountry={props.onChangeSize} /></li>
                <li className="search"><button onClick={props.onClean} type="button" className="input-borderless button-search"><img src={garbage} alt="boton de limpiar busqueda" className="garbage"/>LIMPIAR</button></li>
                
             </ul>
        </div>
    )

}


// STYLE//
import '../../index.css'
import './Hotelheader.css'

export default function HotelHeader (props){
    return (
        <div className="hotel-header">
            <h1 className="titles-hotel">
                Hotel 
            </h1>
            <div>
                <h2 className="subtitles-hotel">
                    {props.checkIn==="" || props.checkOut==="" ? "En cualquier fecha" : `Desde el ${reservationDate(props.checkIn)} Hasta el ${reservationDate(props.checkOut)} `}   
                </h2>
                <h2 className="subtitles-hotel">
                    {props.country === "Cualquier País" ? props.country : `En ${props.country}`}
                </h2>
                <h2 className="subtitles-hotel">
                    {props.price === "Cualquier Precio" ? props.price : `De precio ${props.price}`}
                </h2>
                <h2 className="subtitles-hotel">
                    {props.size === "Cualquier Tamaño" ? props.size : `De tamaño ${props.size}`}
                </h2>
            </div>
        </div>

    );
}


const weekendDay = ["domingo", "lunes","martes","miércoles","jueves","viernes","sábado"];
  
const month = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];


function reservationDate (date){
    let checkIn = new Date(date)

    return `${weekendDay[checkIn.getDay()]}, ${checkIn.getDate()} de ${month[checkIn.getMonth()]} de ${checkIn.getFullYear()}`
}
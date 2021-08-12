
// Styles //
import '../../index.css'
import './Card.css'



export default function ListHotel (props){
    return (
        <div className="super-container">
        {
        props.hotels.length === 0 ?  
        <div className="empty" > 
            <svg className="sad" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M12 14c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5zm-.01-12C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
            <p>Lo siento nos hemos encontrado hoteles para su búsqueda</p>
        </div> :
        props.hotels.map ((card) => {
            return(
            <HotelCard
                key={card.slug}
                images={card.photo}
                nameHotel={card.name}
                datefrom= {card.availabilityFrom}
                dateto={card.availabilityTo}
                description= {card.description}
                location = {card.city}
                country = {card.country}
                bedrooms = {card.rooms}
                cost= {card.price}
                />
            );
        })
    }
        </div>
    );
}

function HotelCard (props){
const {slug, images,nameHotel, datefrom, dateto, description, location, country, bedrooms, cost}=props 

    return (
        <div key={slug} className ="card-container">
           <img className= "card-images" src={images.default} alt="hotel images"/>
           <div className="card-contenido">
                <div className="card-information">
                    <h1 className="card-titule">{nameHotel}</h1>
                    <div className="card-date">Desde el {reservationDate (datefrom)}</div>
                    <div className="card-date">Hasta el {reservationDate (dateto)}</div>
                    <p className="card-abstract">{description}</p>
                    <div className="second-card">
                        <div className="card-placeroom">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                            </div>
                            <div className="text1">
                                {location}, {country}
                            </div>
                        </div>
                        <div className="same-line">
                            <div className="card-placeroom">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24"  fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z"/></svg>  
                                </div>
                                <div className="text1"> {bedrooms} Habitaciones</div>
                            </div>
                            <div className="card-money"><ShowMoney cost={cost}/></div>  
                        </div>  
                    </div>
                </div>
                <button type="button" className="button">Reservar</button>
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

const dollars = ["$","$","$","$"]

function ShowMoney (props){
    return (
        <div className="money">
            {
                dollars.map ((dollar,index)=>{
                    if (index < props.cost){
                        return <h2 key={index} className="dollar1">$</h2>
                    }else {
                        return <h2 key={index} className="dollar2">$</h2>     
                    }
                })}
        </div>
    );
}








import '../index';
import HotelHeader from '../component/header/Hotelheader.jsx';
import MenuResponsive from '../component/menu/Menu.jsx';
import ListHotel from '../component/card/Card.jsx';
import hotelsData from '../db/data.js';
import { useState } from 'react';


function App() {

    const [country, setCountry] = useState("Cualquier País")
    const [price, setPrice] = useState("Cualquier Precio")
    const [size, setSize] = useState("Cualquier Tamaño")
    const [hotels, setHotels] = useState(hotelsData)
    const [checkIn, setCheckIn]=useState ("");
    const [checkOut, setcheckOut]=useState ("");

  const allFilters = (country, price, size, checkIn, checkOut)=>{
    const filterHotels = hotelsData.filter ((hotel)=>{
      return countryFilter(country,hotel) && pricesfilter (price,hotel) && hotelSize (size,hotel) && arrive (checkIn,hotel) && goOut (checkOut,hotel)
    })
    setHotels (filterHotels)
  }

  const pricesfilter = (price, hotel)=>{
    if (price.toLowerCase() === "económico"){
      return hotel.price === 1
    } else if (price.toLowerCase() === "confort"){
      return hotel.price === 2
    } else if (price.toLowerCase() === "lujos") {
      return hotel.price === 3
    } else if (price.toLowerCase() === "magnífico"){
      return hotel.price === 4
    } else {
      return true
    }
  }

  const countryFilter = (country, hotel)=>{
    if (country.toLowerCase() === "cualquier país"){
      return true
    }else {
      return hotel.country===country
    }
  }

  const hotelSize = (size, hotel)=>{
    if (size === "pequeño"){
      return hotel.rooms <=10
    } else if (size === "mediano"){
      return hotel.rooms >10 && hotel.rooms < 20
    }else if (size === "grande"){
      return hotel.rooms >20
    }else {
      return true
    }
  }

    const onChangeCountry = (country)=>{
      setCountry(country);
      allFilters (country,price,size,checkIn,checkOut)
    }

    const onChangePrice = (price) =>{
      setPrice (price)
      allFilters (country,price,size,checkIn,checkOut)
    };
      
    const onChangeSize = (size)=>{
      setSize (size)
      allFilters (country,price,size,checkIn,checkOut)
    }

    const onClean = ()=>{
     setCountry ("Cualquier País")
     setPrice ("Cualquier Precio")
     setSize ("Cualquier Tamaño")
     setHotels (hotelsData)
     setCheckIn ("")
     setcheckOut ("")
    }

    const newDate =(date)=>{
      const newDate = new Date(date)
      newDate.setUTCHours (0)
      newDate.setUTCMinutes (0)
      newDate.setUTCSeconds (0)
      newDate.setUTCMilliseconds (0)
      return newDate.getTime()
    }
     
    const arrive =(checkIn,hotel)=>{
      if (checkIn ===""){
        return true
      } else {
      const date = new Date (checkIn).getTime()
      const dateFrom = newDate (hotel.availabilityFrom)
      return date >= dateFrom
      }
    }

    const goOut = (checkOut,hotel)=> {
      if (checkOut=== ""){
        return true
      }else {
      const date = new Date (checkOut).getTime()
      const dateTo = newDate (hotel.availabilityTo)
      return date<=dateTo 
      }
    }

    const onChangeCheckIn = (e)=>{
      setCheckIn (e.target.value)
      if (checkOut !==""){
        if (newDate(checkOut)<newDate(e.target.value)){
          alert ("La fecha de salida no puede ser menor a la de entrada")
        }else {
          allFilters (country, price, size, e.target.value,checkOut)
        }
      }
    }

    const onChangeCheckOut =(e)=>{
      setcheckOut(e.target.value)
      if (checkIn !==""){
        if (newDate(e.target.value)<newDate(checkIn)){
          alert ("La fecha de salida no puede ser menor a la de entrada")
        }else {
          allFilters (country, price, size, checkIn, e.target.value)
        }
      }
    }

  return (
    <div className="App">
      <header >
        <HotelHeader 
        country={country} 
        price={price} 
        size={size}
        checkIn={checkIn}
        checkOut={checkOut}
        />
        <MenuResponsive 
          country={country} 
          price={price} 
          size={size} 
          checkIn={checkIn}
          checkOut={checkOut}
          onChangeCountry = {onChangeCountry}
          onChangePrice ={onChangePrice}
          onChangeSize ={onChangeSize}
          onClean={onClean}
          onChangeCheckIn={onChangeCheckIn}
          onChangeCheckOut={onChangeCheckOut}
        />
        <ListHotel hotels={hotels}/>
      </header>
    </div>
  );
}

export default App;


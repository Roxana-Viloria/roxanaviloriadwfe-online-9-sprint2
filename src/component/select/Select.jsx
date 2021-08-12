
// STYLE//
import '../menu/Menu.css'


export default function Select (props){
    const handleChanges = (event) => {
        props.newCountry (event.target.value)
    };
    return (
        <div>
            <select className="input-borderless" onChange={handleChanges} value={props.value}>
                {props.list.map((option,index)=>{
                    return (
                        <option key={index} value={option}>{option}</option>
                    )
                }
                )}
            </select>
        </div>
    );
}
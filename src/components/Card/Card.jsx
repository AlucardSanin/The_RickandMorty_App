import { Link } from "react-router-dom";

export default function Card(props) {
   props.char.key = props.char.id;
   //console.log(props);
   return (
      <div>
         <button onClick={() => props.onClose(props.char.key)}>X</button>
         <Link to={`/detail/${props.char.id}`}><h2>{props.char.name}</h2></Link>
         <h2>{props.char.status}</h2>
         <h2>{props.char.species}</h2>
         <h2>{props.char.gender}</h2>
         <h2>{props.char.origin.name}</h2>
         <img src={props.char.image} alt='Imagen de'/>
      </div>
   );
}

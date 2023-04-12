export default function Card(props) {
   props.char.key = props.char.id;
   //console.log(props);
   return (
      <div>
         <button onClick={() => props.onClose(props.char.key)}>X</button>
         <h2>{props.char.name}</h2>
         <h2>{props.char.status}</h2>
         <h2>{props.char.species}</h2>
         <h2>{props.char.gender}</h2>
         <h2>{props.char.origin.name}</h2>
         <img src={props.char.image} alt='Imagen de'/>
      </div>
   );
}

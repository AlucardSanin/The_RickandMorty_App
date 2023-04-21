import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";

function Card(props) {
   props.char.key = props.char.id;
   const[isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         props.removeFav(props.char.key);
      }
      else{
         setIsFav(true);
         props.addFav(props.char)
      }
   }

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => props.onClose(props.char.key)}>X</button>
         <Link to={`/detail/${props.char.key}`}><h2>{props.char.name}</h2></Link>
         <h2>{props.char.status}</h2>
         <h2>{props.char.species}</h2>
         <h2>{props.char.gender}</h2>
         <h2>{props.char.origin.name}</h2>
         <img src={props.char.image} alt='Imagen de'/>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   null,
   mapDispatchToProps
)(Card);
import Card from "../Card/Card";

export default function Cards(props) {
   const { characters, onClose } = props;  
   return (
      <div>
         {
            characters.map(character => {
               return (
                  <Card char={character} onClose={onClose}/>
               )
            })
         }
      </div>
   );
}

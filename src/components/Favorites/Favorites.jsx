import Card from "../Card/Card";
import { connect } from "react-redux";


const Favorites = ({ myFavorites}) => {
  return (
    <>
      {
        myFavorites?.map(fav => {
          return (
            <Card char={fav}/>
          )
        })
        }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(
  mapStateToProps,
  null
)(Favorites);
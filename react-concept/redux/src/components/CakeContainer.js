import { connect } from "react-redux";
import { buyCake } from "../redux";
const CakeContainer = (props) => {
  console.log(props);
  const { buyCake, numOfCakes } = props;
  return (
    <div>
      <h2>Number of cakes{numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { numOfCakes: state.cake.numOfCakes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

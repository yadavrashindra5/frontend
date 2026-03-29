import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  console.log(props);
  const { buyIceCream, numOfIceCream } = props;
  return (
    <div>
      <h2>Number of IceCream{numOfIceCream}</h2>
      <button onClick={buyIceCream}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { numOfIceCream: state.iceCream.numOfIceCream };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);

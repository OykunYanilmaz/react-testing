
import OrderStatusSelector from "../components/OrderStatusSelector";

const PlaygroundPage = () => {
  // return <OrderStatusSelector onChange={value => console.log(value)}/>
  return <OrderStatusSelector onChange={console.log}/>
};

export default PlaygroundPage;

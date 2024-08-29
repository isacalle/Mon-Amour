import "./CardWidget.css";
import bolsa from '../images/bolsa-de-la-compra (1).png';
export const CardWidget = () => {

    return <div className="bolsa"> 
    <h6 className="number">2</h6>
 <img src={ bolsa } className="bolsa" alt="bolsa-compra" />

    </div>
}
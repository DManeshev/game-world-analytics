
import loader from '../../assets/images/loader.svg'
import './loader.style.css';

const Loader = () => {

    return (
        <div className="loader">
            <img src={loader} alt="loader svg"  className="loader__svg"/>
        </div>
    )
}

export default Loader;
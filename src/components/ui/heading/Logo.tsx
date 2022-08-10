import './heading.style.css';

import logo from '../../../assets/images/logo.png';

const Logo = () => { 
    return (
        <div className="logo"> 
            <img src={logo} alt="logo" className='logo__img' />
            <h1 className='logo__text'>Games Stat</h1>
        </div>
    )
}

export default Logo
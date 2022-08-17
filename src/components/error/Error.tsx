import { regexpTags } from '../../shared/regexp';

import './error.style.css';

type ErrorProps = {
    status: number | null,
    message: string,
}

const Error = ({ status, message }: ErrorProps) => {

    const formatMessage = regexpTags(message);

    return (
        <div className="error">
            <h2 className='error__logo'>Error {status}</h2>

            <div className='error__text'>{formatMessage}</div>
        </div>
    )
}

export default Error
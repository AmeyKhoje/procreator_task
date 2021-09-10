import FeatherIcon from 'feather-icons-react';

const Input = (props) => {
    const {
        type,
        placeholder,
        value
    } = props;
    
    return (
        <div className="input-container">
            <input type={type} placeholder={placeholder} value={value} className="input" />
            <div className="input-icon">
                <FeatherIcon icon="search" size="22" />
            </div>
        </div>
    )
}

export default Input
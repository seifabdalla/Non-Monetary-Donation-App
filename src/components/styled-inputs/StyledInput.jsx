import  { useState } from 'react';
import '../../assets/styles/input-styles.scss';
import PropTypes from 'prop-types';



export function StyledInput(props){
    const [wasTouched, setWasTouched] = useState(false);

    const inputId = props.id;

    const handleChange = (event) => {
        props.onChange(event.target.value);
    };

    const handleBlur = () => {
        setWasTouched(true);
    };

    const inputClassName = `form__field ${props.color}  ${wasTouched ? 'required' : ''}`
    const labelClassName = `form__label ${wasTouched ? 'required' : ''}`

    return (
        <div className="form__group field">
            <input type={props.type} className= {inputClassName} onBlur={handleBlur} placeholder={props.text} name={props.text} id={inputId} onChange={handleChange} value={props.value} required />
            <label htmlFor={inputId} className={labelClassName}>{props.text}</label>
        </div>
    );
}


StyledInput.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    color: PropTypes.string,
};

StyledInput.defaultProps = {
    type: '',
    id: '',
    text: '',
    color: 'text-slate-100',
};
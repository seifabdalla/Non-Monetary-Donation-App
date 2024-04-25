import propTypes from 'prop-types';
import "../assets/styles/select-styles.css";

export function StyledSelect(props){

    return (
            <details className="custom-select">
                <summary className="radios">
                    <input type="radio" name="item" id="default" title={props.title} checked disabled={true}/>
                    {
                        props.options.map((option) => {
                            return (
                                <input type="radio" name="item" id={option} title={option} key={option} onChange={props.onChange}/>
                            );
                        })
                    }
                </summary>
                <ul className="list">
                    {
                        props.options.map((option) => {
                            return (
                                <li key={option}>
                                    <label htmlFor={option}>{option}</label>
                                </li>
                            );
                        })
                    }
                </ul>
            </details>
    );
}

StyledSelect.propTypes = {
    title: propTypes.string,
    options: propTypes.array,
    onChange: propTypes.func
}
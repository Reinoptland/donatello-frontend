
function TextInput(props) {
    return (
        <div className="form__input-group">
            <label
                className="form__label"
                htmlFor={props.name}
            >
                <input
                    value={props.values[props.name]}
                    onChange={props.handleChange}
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    className="form__input"
                />
            </label>
            {props.errors[props.name] && <p>{props.errors[props.name]}</p>}
        </div>

    )
}

export default TextInput;
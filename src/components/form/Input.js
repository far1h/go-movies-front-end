import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div className="mb-3" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor={props.name} className="form-label" style={{ marginBottom: 0 }}>
                {props.title}
            </label>
            <input
                type={props.type}
                className={props.className}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                ref={ref}
                autoComplete={props.autoComplete}
                value={props.value}
                style={{ width: "100%" }}
            />
            <div className={props.errorDiv}>
                {props.errorMsg && <div className="text-danger">{props.error}</div>}
            </div>
        </div>
    );
});

export default Input;
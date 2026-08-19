import { useId } from 'react';
import styles from './input.module.css';

const Input = ({
  label,
  name,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  error,
  helperText,
  disabled = false,
  required = false,
  onChange,
  className = '',
  ...rest
}) => {
  const generatedId = useId();
  const inputId = name || generatedId;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  const describedBy = error ? errorId : helperText ? helperId : undefined;

  const wrapperClassNames = [styles.wrapper, className].filter(Boolean).join(' ');
  const inputClassNames = [styles.input, error ? styles.inputError : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClassNames}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
        className={inputClassNames}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        {...rest}
      />

      {error ? (
        <p id={errorId} className={styles.errorText} role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className={styles.helperText}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
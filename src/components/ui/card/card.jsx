import styles from './card.module.css';

const Card = ({ children, variant = 'default', className = '', ...rest }) => {
  const classNames = [styles.card, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default Card;
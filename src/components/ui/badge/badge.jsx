import styles from './badge.module.css';

const Badge = ({ children, variant = 'default', className = '', ...rest }) => {
  const classNames = [styles.badge, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
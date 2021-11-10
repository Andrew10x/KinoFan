import styles from './styles.module.scss';

const TicketCard = ({ children }) => {
  return (
    <div className={styles.card}>
      <h2>Квитки</h2>
      {children}
    </div>
  );
};

export default TicketCard;

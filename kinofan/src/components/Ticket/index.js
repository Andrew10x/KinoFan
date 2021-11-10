import styles from './styles.module.scss';

const Ticket = ({row, seat, price}) => {
  return (
    <div className={styles.ticket}>
      <h3>
        Ряд {row} Місце {seat}
      </h3>
      <h3 className={styles.price}>{price}</h3>
    </div>
  );
};

export default Ticket;

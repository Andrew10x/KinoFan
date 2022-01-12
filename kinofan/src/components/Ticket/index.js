import styles from './styles.module.scss';

const Ticket = ({ row, seat, price, hall, film, margin }) => {
  if (hall && film) {
    return (
      <div className={styles.ticket}>
        <h3>Фільм: {film}</h3>
        <h3>
          Ряд {row} Місце {seat}
        </h3>
        <h3 className={styles.price}>{price}</h3>
      </div>
    );
  }
  return (
    <div className={styles.ticket} style={{marginLeft: margin ? `${margin}rem`: ''}}>
      <h3>
        Ряд {row} Місце {seat}
      </h3>
      <h3 className={styles.price}>{price}</h3>
    </div>
  );
};

export default Ticket;

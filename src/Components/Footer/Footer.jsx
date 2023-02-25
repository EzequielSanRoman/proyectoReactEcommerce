import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <ul className={styles.containerListFooter}>
        <li>Drones</li>
        <li>Accesorios</li>
        <li>¿Mundo FPV si/no?</li>
        <li>Contactanos</li>
      </ul>
    </div>
  );
};

export default Footer;

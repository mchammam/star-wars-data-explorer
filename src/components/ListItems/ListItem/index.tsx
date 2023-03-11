import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function ListItem({
  linkTo,
  linkState,
  title,
  subtitle,
}: {
  linkTo: string;
  linkState: object;
  title: string;
  subtitle: string;
}) {
  return (
    <li className={styles.listItem}>
      <Link to={linkTo} state={linkState}>
        <h3 className={styles.listItem__title}>{title}</h3>

        <p className={styles.listItem__subtitle}>
          <small>{subtitle}</small>
        </p>
      </Link>
    </li>
  );
}

export default ListItem;

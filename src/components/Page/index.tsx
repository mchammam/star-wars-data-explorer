import { ReactNode } from 'react';
import styles from './styles.module.css';

function Page({
  header,
  children
}: {
  header: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className={styles.page}>
      <header className={styles.page__header}>
        <h2>{header}</h2>
      </header>
      <main>{children}</main>
    </section>
  );
}

export default Page;

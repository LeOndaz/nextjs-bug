import styles from './page.module.css'
import ClientComponent from "@/components/ClientComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <ClientComponent />
    </main>
  )
}

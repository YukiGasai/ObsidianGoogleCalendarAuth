import Link from 'next/link'
import style from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFileCirclePlus, faWandMagic } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className={style.main}>
      <h1 className={style.h1}>Obsidian Google Calendar</h1>
      <h2 className={style.h2}>View, Create, Update and Delete your Google events from inside Obsidian</h2>

      <div className={style.cardGroup}>
        <div className={`${style.littleCard} ${style.card}`} />
        <div className={`${style.bigCard} ${style.card}`} />
        <div className={`${style.littleCard} ${style.card}`} />
        <div className={`${style.bigCard} ${style.card}`} />
        <div className={`${style.littleCard} ${style.card}`} />
        <div className={`${style.bigCard} ${style.card}`} />
        <div className={`${style.littleCard} ${style.card}`} />
        <div className={`${style.bigCard} ${style.card}`} />
      </div>
      
      <div className={style.why}>
      <h2 className={style.question}>Why use the Obsidian Google Calendar Plugin?</h2>
      <section className={style.reasons}>
        <article className={style.reasonContainer}>
          <FontAwesomeIcon icon={faEye} fontSize={'5em'} style={{color: "#9a8cd9",}} />
          <h4 className={style.h4}>Interact</h4>
          <p className={style.smallText}>Use your Google Calendar events inside Obsidian.</p>
        </article>
        <article className={style.reasonContainer}>
          <FontAwesomeIcon icon={faFileCirclePlus} fontSize={'5em'} style={{color: "#9a8cd9",}} />
          <h4 className={style.h4}>Integrate</h4>
          <p className={style.smallText}>Save your event data into your Obsidian notes.</p>
        </article>
        <article className={style.reasonContainer}>
        <FontAwesomeIcon icon={faWandMagic} fontSize={'5em'} style={{color: "#9a8cd9",}} />
          <h4 className={style.h4}>Automate</h4>
          <p className={style.smallText}>Automatically generate customized notes for your events.</p>
        </article>
      </section>
      </div>
      <div className={style.bento}>
      <section className={style.userOption}>
        <Link className={style.documentationBox} href='https://yukigasai.github.io/obsidian-google-calendar/#/'>
          <span>View the documentation for more details</span>
        </Link>
        <Link className={style.donateBox} href='https://ko-fi.com/yukigasai'>
          <FontAwesomeIcon icon={faHeart} fontSize={'3em'} style={{color: "#9a8cd9",}} />
        </Link>
        <Link className={style.contributionBox} href='https://github.com/YukiGasai/obsidian-google-calendar'>
          <span>Contribute on GitHub</span>
        </Link>
        <Link className={style.downloadBox} href='obsidian://show-plugin?id=google-calendar'>
          <span>Add to Obsidian</span>
        </Link>
      </section>
      </div>   
    </main>
  )
}

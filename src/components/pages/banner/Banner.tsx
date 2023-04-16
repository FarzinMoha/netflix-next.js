import styles from './Banner.module.scss'

const Banner = ({ title, imgUrl, subTitle }: bannerProps) => {
  return (
  <section className={styles.container} style={{backgroundImage:`url(${imgUrl})`}}>
    
    <div className={styles.infoContainer}>
        <h2 className={styles.title}>
            {title}
        </h2>
        <h2 className={styles.subTitle}>
            {subTitle}
        </h2>
    </div>
  </section>
  );
};

export default Banner;

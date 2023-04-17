import { bannerProps } from "@/types/types";
import styles from "./Banner.module.scss";
import Button from "@/components/components/button/Button";
import PlayIcon from "@/icon/PlayIcon";
import { pallet } from "@/pallet/pallet";

const Banner = ({ title, imgUrl, subTitle }: bannerProps) => {
  return (
    <section
      className={styles.container}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className={styles.infoContainer}>
        <div className={styles.title1}>
          <span className={styles.title1Fisrt}>N</span>
          <span className={styles.title1Second}> series</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <h2 className={styles.subTitle}>{subTitle}</h2>
        <Button 
        icon={<PlayIcon width={27} height={27} color={pallet.black100} />}>
          Play
        </Button>
      </div>
    </section>
  );
};

export default Banner;

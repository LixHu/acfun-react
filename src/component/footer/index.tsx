import styles from '@/styles/footer.module.scss'
import Image from "next/image"
import gifImage from '@/assets/images/37.gif'

export function Footer() {
  return (
    <div className={styles.footer}>
      {/* link相关 */}
      <div className={styles.top}>
        <div className={styles.linkItem}>
          <div className={styles.title}>合作</div>
          <div className={styles.links}>
            <div>关于我们</div>
            <div>联系我们</div>
          </div>
        </div>
        {/* ac娘图片 */}
        <div className={styles.topImage}>
          <Image src={gifImage} alt="acfun" width={80} height={80}/>
        </div>
      </div>
      <div className={styles.ICP}>
        <div className={styles.left}>
          <div className={styles.item}>网上有害信息举报专区丨中央网信办（国家网信办）违法和不良信息举报中心</div>
          <div className={styles.item}>网络文化经营单位</div>
          <div className={styles.item}>京公网安备 11010802029026号</div>
        </div>
      </div>
    </div>
  )
}
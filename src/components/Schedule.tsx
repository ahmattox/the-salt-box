import * as styles from './Schedule.module.css'

import React from 'react'

import * as Typography from 'src/components/general/Typography'

export const Schedule: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography.SecondaryHeading>Event Schedule</Typography.SecondaryHeading>

      <div className={styles.day}>
        <h3 className={styles.dayHeading}>Saturday</h3>
        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #1</div>
          <div className={styles.itemTime}>9am - 1pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Lunch Break</div>
          <div className={styles.itemTime}>1pm - 2pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #2</div>
          <div className={styles.itemTime}>2pm - 6pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Casual Bonus Round</div>
          <div className={styles.itemTime}>Location TBD</div>
          <div className={styles.itemTime}>~7:30pm onward</div>
        </div>
      </div>

      <div className={styles.day}>
        <h3 className={styles.dayHeading}>Sunday</h3>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #3</div>
          <div className={styles.itemTime}>9am - 1pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Lunch Break</div>
          <div className={styles.itemTime}>1pm - 2pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #4</div>
          <div className={styles.itemTime}>2pm - 6pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Casual Bonus Cube</div>
        </div>
      </div>
    </div>
  )
}

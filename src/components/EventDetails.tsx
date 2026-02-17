import * as styles from './EventDetails.module.css'

import * as React from 'react'

import * as Typography from 'src/components/general/Typography'

type EventState =
  | 'ticket-sales'
  | 'sold-out'
  | 'in-progress'
  | 'concluded'
  | 'pre-sale'

const eventState = 'ticket-sales' as EventState

export const EventDetails: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ticketInfo}>
        {eventState === 'concluded' ? null : eventState === 'in-progress' ? (
          <div>
            <a
              href="https://saltbox.hedron.network/"
              className={styles.largeButton}
            >
              Hedron Network - Register For Drafts
            </a>
          </div>
        ) : eventState === 'sold-out' ? (
          <div className={styles.soldOut}>
            <div className={styles.soldOutHeading}>Tickets Sold Out</div>

            <p>
              {/* <a href="https://www.eventbrite.com/e/the-salt-box-tickets-1057472070429?aff=oddtdtcreator">
                View Details on EventBrite
              </a> */}
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScsug9tBx0yQudhn-Cq4ToiJXVb3iecCV0RfiGz3uuvxZKcXg/viewform"
              className={styles.largeButton}
            >
              Join Waitlist
            </a>
          </div>
        ) : eventState === 'ticket-sales' ? (
          <>
            <a
              href="https://buy.stripe.com/3cI00kgqnbpo4VVfHI0Jq03"
              className={styles.buyButton}
            >
              Buy Tickets - $45
            </a>

            <a
              href="https://buy.stripe.com/fZu3cwfmjbpo5ZZ2UW0Jq04"
              className={styles.largeButton}
            >
              Affordable Tickets - $10
            </a>

            <p className={styles.ticketNote}>
              Discounted tickets are available here if your financial situation
              calls for it.
            </p>

            <p className={styles.ticketNote}>72 Total Seats Available.</p>
          </>
        ) : eventState === 'pre-sale' ? (
          <div>
            <p>Tickets available soon</p>
          </div>
        ) : null}
      </div>

      <a href="https://discord.gg/eQgEnpQgeb" className={styles.largeButton}>
        Join the Discord Server
      </a>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc11eHn_OJMxUy23z_cuqpnSYEygF5iYn3e375VMB04TQ6aZw/viewform"
        className={styles.largeButton}
      >
        Submit Your Cube
      </a>

      <hr className={styles.rule} />

      <Typography.SecondaryHeading>Location</Typography.SecondaryHeading>

      <div className={styles.location}>
        <p>
          <a href="https://g.co/kgs/19D86dZ">
            Emmanuel Episcopal Church
            <br />
            811 Cathedral Street
            <br />
            Baltimore, MD
          </a>
        </p>
      </div>

      <p>
        The event is located near downtown in the Mt Vernon neighborhood, close
        to transportation and hotels. It&rsquo;s walking distance from the{' '}
        <a href="https://g.co/kgs/4Hj6bJ8">Penn Station train station</a> (3/4
        mi) and <a href="https://g.co/kgs/LBrJZST">LightRail Station</a> (1/4
        mi) which goes directly to BWI airport.
      </p>
    </div>
  )
}

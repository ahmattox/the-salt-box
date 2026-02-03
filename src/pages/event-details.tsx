import * as styles from './event-details.module.css'

import * as React from 'react'
import type { HeadFC } from 'gatsby'

import { Layout } from 'src/components/layout/Layout'
import { Header } from 'src/components/layout/Header'

const EventDetailsPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Header />

        <div className={styles.content}>
          <h1 className={styles.heading}>Event Structure</h1>

          <p>
            The Salt Box will follow the emerging format of{' '}
            <a href="https://luckypaper.co/events/">mid-sized cube events</a>.
            If this is your first, here&rsquo;s what to expect.
          </p>

          <p>
            The event includes four draft slots. In each slot, players will rank
            the Cubes they&rsquo;re most interested in playing from those
            available. Everyone will be organized into pods of 8, assigning
            players their highest ranked choice as much as possible. There may
            not be a perfectly divisible number of players each round, so some
            pods may be slightly smaller. With an odd number, some players will
            receive a &ldquo;bye&rdquo; in some rounds after drafting.
          </p>

          <p>
            During each draft, each pod will receive the Cube, collaboratively{' '}
            <a href="https://luckypaper.co/articles/how-to-quickly-shuffle-your-mtg-cube/">
              shuffle
            </a>{' '}
            and create packs. Then they&rsquo;ll draft, build decks, and play
            three best-of-three matches.
          </p>

          <p>
            Judges and staff will help coordinate moving each pod through setup,
            drafting, and rounds of gameplay when the whole pod is ready to
            continue. Judges will also be able to help with rules questions or
            to fix game states if something goes awry. Your fellow pod mates
            will include some veteran cubers who can help with logistical
            questions too.
          </p>

          <p>
            Cube rankings and match pairings are all organized through{' '}
            <a href="https://hedron.network">Hedron Network</a>, a site built to
            facilitate Cube events. Players will also use it to submit a photo
            of all the cards they drafted at the beginning and end of each
            draft. A judge will confirm pools and photos when you return your
            cards to them. Players will also report match results in Hedron
            Network to award points and determine the next round&rsquo;s
            pairings.
          </p>

          <p>
            Points will be given for each match win. In the sunday afternoon
            draft slot, the 8 players with the most points will face off in one
            pod the winner of which will be crowned the Salt Box Champion. The
            rest of the pods in this slot will be organized by ranked cube
            choice as normal.
          </p>

          <p>
            You don&rsquo;t need to participate in every draft slot. Pods will
            be generated just before each draft, so, while you&rsquo;ll be able
            to rank your cube preferences in advance of the event, you can
            change your mind or opt out of any slot up to a few minutes before
            each draft begins.
          </p>

          <p>
            If you still have questions,{' '}
            <a href="https://discord.gg/eQgEnpQgeb">reach out in the discord</a>
            !
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default EventDetailsPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>Event Details - The Salt Box</title>

      <meta
        property="og:image"
        content="http://thesaltbox.fun/the-salt-box-og.jpg"
      />
      <meta property="og:image-width" content="1200" />
      <meta property="og:image-height" content="630" />

      <meta property="og:title" content="Event Details - The Salt Box" />

      <meta
        name="description"
        content="The event will include four draft slots over two days. Players will be organized into pods based on ranked choice votes of their preferred cubes."
      />
      <meta
        property="og:description"
        content="The event will include four draft slots over two days. Players will be organized into pods based on ranked choice votes of their preferred cubes."
      />

      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}

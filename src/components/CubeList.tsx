import * as styles from './CubeList.module.css'

import * as React from 'react'

import * as Typography from 'src/components/general/Typography'

const cornerWidth = 30
const cornerHeight = 30

interface Props {
  title: string
  cubes: {
    name: string | null
    url: string | null
    designer: string | null
    designerURL: string | null
    imageURL: string | null
    description: string | null
  }[]
}

export const CubeList: React.FC<Props> = (props) => {
  const { title, cubes } = props

  return (
    <div className={styles.container}>
      <Typography.SecondaryHeading>{title}</Typography.SecondaryHeading>

      <div className={styles.cubes}>
        {cubes.map((cube) => (
          <div key={cube.name} className={styles.cube}>
            <a href={cube.url} className={styles.cubeMain}>
              <img src={cube.imageURL} className={styles.image} />

              <div className={styles.details}>
                <div className={styles.name}>{cube.name}</div>

                <div className={styles.description}>{cube.description}</div>
              </div>

              <svg
                className={styles.cornerBevel}
                width={cornerWidth}
                height={cornerHeight}
                viewBox={`0 0 ${cornerWidth} ${cornerHeight}`}
              >
                <polygon
                  points={`0,0 ${cornerWidth},0 ${cornerWidth},${cornerHeight}`}
                  fill="var(--background-color)"
                />
                <line
                  x1="0"
                  y1="0"
                  x2={cornerWidth}
                  y2={cornerHeight}
                  strokeWidth={2}
                  stroke="var(--text-color)"
                />
              </svg>
            </a>
            {cube.designerURL != null ? (
              <div className={styles.designer}>
                <a className={styles.designerLink} href={cube.designerURL}>
                  - {cube.designer}
                </a>
              </div>
            ) : (
              <div className={styles.designer}>- {cube.designer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

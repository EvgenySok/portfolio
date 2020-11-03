import React, { useState, useEffect } from 'react'
import ItemsCarousel from 'react-items-carousel'
import Media from 'react-media'

import skilsData from './skilsData'

const ScilsSlider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setActiveItemIndex(activeItemIndex + 1), 2000)
    return () => clearInterval(interval)
  }, [activeItemIndex])

  const chevronWidth = 40
  return (
    <Media queries={{
      small: "(max-width: 599px)",
      medium: "(min-width: 600px) and (max-width: 1199px)",
      large: "(min-width: 1200px)"
    }}>
      {matches => (
        <div style={{ padding: `0 ${chevronWidth}px` }} id="skils-slider">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={matches.small ? 1 : matches.medium ? 3 : matches.large ? 5 : 5}
            infiniteLoop
            gutter={20}
            chevronWidth={chevronWidth}
          >
            {skilsData.map(it => {
              return (
                <div className="skils-block">
                  <it.svg/>
                  <span>{it.title}</span>
                  <p>{it.discription} </p>
                </div>)
            })
            }
          </ItemsCarousel>
        </div>
      )}
    </Media>
  )
}

export default ScilsSlider

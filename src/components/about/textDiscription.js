import React from 'react'
import fotoMe from '../../assets/images/me.jpg'

const TextDiscription = () => {

  return (
    <div className="about__row">

      <div className="about__foto">
        <div className="about__frame">
          <div className="about__img" style={{ backgroundImage: `url(${fotoMe})` }} />
        </div>
      </div>

      <div className="about__body">
        <p className="about__label">im a ux /ui designer austin based who loves clean, simple & unique design. i also enjoy crafting brand identities, icons, & ilustration work. </p>
        <p className="about__text">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person.</p>
      </div>

    </div>

  )
}

export default TextDiscription
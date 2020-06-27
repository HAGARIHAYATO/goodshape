import { FC, useState } from 'react'

type Props = {
  
}

const Slider: FC<Props> = ({}) => {
  let [isSlideIn, setSlideIn] = useState(false)
  return (
    <>
      <div
        className="slider"
        onClick={() => {
          setSlideIn(!isSlideIn)
        }}
      >
        <section>
          
        </section>
      </div>
      <style jsx>{`
        .slider {
          height: 600px;
          width: 49%;
          border: solid 3px royalblue;
          color: royalblue;
          border-radius: 10px;
          transition: all .4s;
          ${
            isSlideIn ? `transform: translateY(-80%)` : ""
          }
        }
        section {
          
        }
      `}</style>
    </>
  )
}

export default Slider
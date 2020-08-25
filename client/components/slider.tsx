import { FC, useState, Dispatch, SetStateAction } from 'react'
import CardLayout from './card_layout'
import { colors } from '../public/library.json'

type Props = {
  isSlideIn: boolean,
  setSlideIn: Dispatch<SetStateAction<boolean>>
}

const Slider: FC<Props> = ({isSlideIn, setSlideIn}) => {
  const showCards = () => {
    return(
      <>
        <CardLayout />
          {/* left */}
        <CardLayout />
          {/* center */}
        <CardLayout />
          {/* right */}
      </>
    )
  }
  return (
    <>
      <div className={isSlideIn?"blackBack":""}>
        <div
          className="slider"
          onClick={() => {
            isSlideIn !== true ? setSlideIn(!isSlideIn) : function(){}
          }}
        >
          <p
            className="backAllow"
            onClick={() => {
              isSlideIn ? setSlideIn(!isSlideIn) : function(){}
            }}
          >
            <img
              src="/back.png"
              alt="back"
            />
          </p>
          <section>
            {isSlideIn ? showCards() : function(){}}
          </section>
        </div>
      </div>
      <style jsx>{`
        .slider {
          height: 600px;
          border: solid 3px ${colors.violet};
          color: ${colors.violet};
          border-radius: 10px;
          position: absolute;
          ${
            isSlideIn ? `top: 50%; left: 50%; transform: translate(-50%, -50%); width: 95%; height: 90%;`
            :
            "top: 20%; width: 100%;"
          }
        }
        .blackBack {    
          position: absolute;
          background-color:rgba(0,0,0,0.8);
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          transition: all .4s;        
        }
        section {
          padding: 5%;
          height: 100%;
          width: 100%;
          display: flex;
          border-radius: 10px;
          justify-content: space-between;
        }
        .backAllow {
          position: absolute;
          top: 0;
          right: 10px;
          transition: transform .4s;
        }
        .backAllow:hover {
          transform: scale(0.8);
        }
      `}</style>
    </>
  )
}

export default Slider
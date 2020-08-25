import { FC, useState, Dispatch, SetStateAction } from 'react'

type Props = {
  isSlideIn: boolean,
  setSlideIn: Dispatch<SetStateAction<boolean>>
}

const Slider: FC<Props> = ({isSlideIn, setSlideIn}) => {
  return (
    <>
      <div className={isSlideIn?"blackBack":""}>
        <div
          className="slider"
          onClick={() => {
            setSlideIn(!isSlideIn)
          }}
        >
          <section>
            
          </section>
        </div>
      </div>
      <style jsx>{`
        .slider {
          height: 600px;
          border: solid 3px #574AE2;
          color: #574AE2;
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
          
        }
      `}</style>
    </>
  )
}

export default Slider
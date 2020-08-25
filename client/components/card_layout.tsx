import { FC } from 'react'
import { colors } from '../public/library.json'

const CardLayout: FC = () => {
  return (
    <>
      <div className="outline">
        <p className="humanPict">
          <img src="/human.svg" alt="human"/>
        </p>
        <h2 className="card__title">履歴一覧</h2>
        <p className="card__text">
          rolem ipsum rolem ipsum rolem rolem ipsum
          rolem ipsum rolem ipsum rolem ipsum rolem ipsum
          rolem ipsum rolem ipsum rolem ipsum rolem ipsum
          rolem ipsum rolem ipsum rolem ipsum rolem ipsum
          rolem ipsum rolem ipsum rolem ipsum rolem ipsum 
        </p>
      </div>
      <style jsx>{`
        * {
          background-color: inherit;
          color: inherit;
        }
        .outline {
          border-radius: 10px;
          height: 100%;
          width: 30%;
          border: solid 1px black;
          background-color: black;
          color: ${colors.violet};
        }
        .humanPict {
          width: 60%;
          margin: 5% auto;
          background-color: black;
        }
        .humanPict img {
          background-color: black;
          height: 30%;
          width: 100%;
        }
        .card__title {
          text-align: center;
        }
        .card__text {
          padding: 5%;
          word-break: break-all;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default CardLayout
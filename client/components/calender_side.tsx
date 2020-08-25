import {FC, useState, Dispatch, SetStateAction} from 'react'
import getDate from 'date-fns/getDate'
import { getMonth, getYear } from 'date-fns';

type Props = {
  selectedDay: Date,
  setFlag: Dispatch<SetStateAction<boolean>>,
  openFlag: boolean,
  data: {
    date: number,
    plans: Array<any>,
    condition: number,
  },
}

const imgStyle = {
  backgroundColor: "inherit",
  height: "24px",
  verticalAlign: "text-top"
}

const CalenderSide: FC<Props> = ({selectedDay, setFlag, openFlag, data}) => {
  const getEvent = () => {
    switch (data.condition) {
      case 1:
        return <img style={imgStyle} src="/happy_face.svg" alt="condition" />;
      case 2:
        return <img style={imgStyle} src="/sad_face.svg" alt="condition" />;
      default: 
        return <img style={imgStyle} src="/face.svg" alt="condition" />;
    }
  }
  return (
    <>
      <div className="side__container">
        <div className="widenBar">
          <p className="rotateBar" onClick={() => { setFlag(!openFlag) }}>▽</p>
        </div>
        <section className="side">
          <h2>{`${getYear(selectedDay)}年${getMonth(selectedDay)+1}月${getDate(selectedDay)}日`}{data != null ? getEvent() : null}</h2>
        </section>
      </div>
      <style jsx>{`
        .side__container {
          display: flex;
          background-color: lightgrey;
          border-radius: 10px;
          position: absolute;
          top: 0;
          right: 0;
          transition: all .5s;
          ${openFlag?"width: 29.5%; height: 100%; z-index: 2;":"width: 29.5%; height: 9%;"}
        }
        .side {
          height: 100%;
          width: 100%;
          background-color: inherit;
          margin: 0 0 0 .5%;
          border-radius: 10px;
          padding: 10px;
        }
        .side h2, p {
          background-color: inherit;
          color: black;
          font-size: 24px;
        }
        .rotateBar {
          font-weight: bold;
        }
        .widenBar {
          width: 50px;
          background-color: inherit;
          border-radius: 10px 0 0 10px;
          position: relative;
          transition: all .4s;
          border-right: solid 1px grey;
        }
        .widenBar p {
          position: absolute;
          top: 50%;
          transition: transform .7s;
          border-radius: 50%;
          transform: translateY(-50%) ${openFlag?"rotate(-540deg)":""};
          text-align: center;
          width: 100%;
          font-weight: bold;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default CalenderSide
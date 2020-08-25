import React, { FC, useState, Dispatch, SetStateAction }  from 'react'
import format from 'date-fns/format'
import getDate from 'date-fns/getDate'
import getDay from 'date-fns/getDay'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import endOfWeek from 'date-fns/endOfWeek'
import eachWeekOfInterval from 'date-fns/eachWeekOfInterval'
import addMonths from 'date-fns/addMonths' 
import subMonths from 'date-fns/subMonths'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import { getMonth } from 'date-fns'

type Props = {
  openFlag: boolean,
  selectDay: Dispatch<SetStateAction<Date>>,
  seletedDay: Date,
  getfullday: Array<getday>
}

type getday = {
  date: number,
  plans: Array<any>,
  condition: number,
}

const getCalendarArray = (date: Date): Date[][] => {
  const sundays = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date)
  })
  return sundays.map(sunday =>
    eachDayOfInterval({start: sunday, end: endOfWeek(sunday)})
  )
}


const CalenderItem: FC<Props> = ({openFlag, selectDay, seletedDay, getfullday}) => {
  const getEvent = (date: Date) => {
    const day = getfullday.filter(item => {
      return item.date == getDate(date) && getMonth(date) == getMonth(targetDate)
    })
    if (day.length != 0) {
      let str: string
      switch (day[0].condition) {
        case 1:
        str = "絶好調"
        return str
        case 2:
        str = "絶不調"
        return str
        default: 
        str = "普通";
        return str
      }
    }
  }
  const week = ["日","月","火","水","木","金","土"]
  const [targetDate, setTargetDate] = useState(new Date())
  const calendar = getCalendarArray(targetDate)
  return (
    <>
      <div className="item">
        <div className="date__box">
          <button onClick={() => setTargetDate(current => subMonths(current, 1))}>≪</button>
          <button onClick={() => setTargetDate(new Date())}>今月</button>
          <button onClick={() => setTargetDate(current => addMonths(current, 1))}>≫</button>
          <h3>{format(targetDate, 'y年M月')}</h3>
        </div>
        <table>
          <thead>
            <tr className="calendar__header">
              {week.map((item: string) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendar.map((weekRow, rowNum) => (
              <tr className="calendar__body" key={rowNum}>
                {weekRow.map((date: Date) => ( 
                  <td className={getDate(date) == getDate(seletedDay) && getMonth(date) == getMonth(targetDate) ? "calendar__day selected": "calendar__day"}
                    key={getDay(date)}
                    onClick={() => getMonth(date) == getMonth(targetDate) ? selectDay(date) : null}
                  >
                    <p
                      className={getDate(date) != getDate(new Date) || getMonth(date) != getMonth(new Date) ? "day__number" : "today"}
                    >
                      {getMonth(date) == getMonth(targetDate) ? getDate(date) : "・"}
                    </p>
                    <p className="day">
                      {getEvent(date)}
                    </p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .day {
          background-color: inherit;
        }
        .item {
          height: 100%;
          width: 100%;
          padding: 0 5%;
          position: absolute;
          top: 0;
          left: 0;
          
          text-align: center;
        }
        table {
          width: 100%;
          height: 90%;
        }
        .calendar__header {
          height: 40px;
        }
        .calendar__body {
          height: 15%;
        }
        .calendar__day {
          width: ${100/7}%;
          border-radius: 20px;
          border: solid 1px white;
          cursor: pointer;
        }
        .selected {
          background-color: lightgray !important;
          transition: background-color .4s;
        }
        .selected p {
          color: #574AE2 !important;
          font-weight: bold;
        }
        .date__box {
          height: 10%;
        }
        .date__box button {
          outline: none;
          border: solid 1px grey;
          border-radius: 10px;
          padding: 2px 10px;
          font-weight: bold;
          margin: 0 5px;
        }
        .date__box button:hover {
          background-color: grey;
          transition: all .4s;
        }
        .day__number {
          color: grey;
          background-color: inherit;
        }
        .today {
          color: red;
          background-color: inherit;
        }
      `}</style>
    </>
  )
}

export default CalenderItem
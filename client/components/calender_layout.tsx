import { FC, useState } from 'react'
import CalenderItem from './calender_item'
import CalenderSide from './calender_side'
import { getDate } from 'date-fns'

type Props = {}

type Data = {
  date: number,
  plans: any[],
  condition: number
}

// calender情報API経由でもらう
const getfullday: Array<Data> = [
  {
    date: 1,
    plans: [
    ],
    condition: 2
  },
  {
    date: 2,
    plans: [
    ],
    condition: 1
  }
]

const CalenderLayout: FC<Props> = () => {
  const [selectedDay, selectDay] = useState(new Date)
  const [openFlag, setFlag] = useState(false)
  const data = getfullday.filter((item) => {
    return item.date == getDate(selectedDay)
  })
  return (
    <>
      <div className="layout">
        <CalenderItem openFlag={openFlag} selectDay={selectDay} seletedDay={selectedDay} getfullday={getfullday} />
        <CalenderSide openFlag={openFlag} setFlag={setFlag} selectedDay={selectedDay} data={data.length != 0 ? data[0] : null}/>
      </div>
      <style jsx>{`
        .layout {
          position: relative;
          height: 100%;
          padding: .5%;
        }
      `}</style>
    </>
  )
}

export default CalenderLayout
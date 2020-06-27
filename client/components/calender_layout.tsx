import { FC, useState } from 'react'
import CalenderItem from './calender_item'
import CalenderForm from './calender_form'
import { getDate } from 'date-fns'

type Props = {
}

// calender情報API経由でもらう
const getfullday = [
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
  const data = getfullday.filter((item) => {
    return item.date == getDate(selectedDay)
  })
  return (
    <>
      <div className="layout">
        <CalenderItem selectDay={selectDay} seletedDay={selectedDay} getfullday={getfullday} />
        <CalenderForm selectedDay={selectedDay} data={data.length != 0 ? data[0] : null}/>
      </div>
      <style jsx>{`
        .layout {
          height: 100%;
          padding: .5%;
          display: flex;
        }
      `}</style>
    </>
  )
}

export default CalenderLayout
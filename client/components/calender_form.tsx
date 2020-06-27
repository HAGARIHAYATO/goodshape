import {FC} from 'react'
import getDate from 'date-fns/getDate'
import { getMonth, getYear } from 'date-fns';

const handleSubmit = (e) => {
  e.preventDefault();
}

type Props = {
  selectedDay: Date,
  data: {
    date: number,
    plans: Array<any>,
    condition: number,
  },
}

const CalenderForm: FC<Props> = ({selectedDay, data}) => {
  const getEvent = (): string => {
    let str: string
    switch (data.condition) {
      case 1:
      str = "絶好調"
      return str;
      case 2:
      str = "絶不調"
      return str;
      default: 
      str = "普通"
      return str;
    }
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>{`${getYear(selectedDay)}年${getMonth(selectedDay)+1}月${getDate(selectedDay)}日`}</h2>
        <p>{data != null ? `condition: ${getEvent()}` : null}</p>
      </form>
      <style jsx>{`
        .form {
          height: 100%;
          width: 29.5%;
          background-color: lightgrey;
          margin: 0 0 0 .5%;
          border-radius: 10px;
          padding: 10px;
        }
        h2, p {
          background-color: inherit;
          color: black;
        }
      `}</style>
    </>
  )
}

export default CalenderForm
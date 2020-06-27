import CalenderLayout from '../../components/calender_layout'
import Slider from '../../components/slider'

export default function Index() {
  return (
    <div className="main">
      <div className="main__container">
        <CalenderLayout />
      </div>
      <div className="bottom__container">
        <Slider />
        <Slider />
      </div>
      <style jsx>{`
        .main {
          overflow-Y: hidden;
          height: 100vh;
          padding: 2% 2% 0 2%;
        }
        .main__container {
          width: 100%;
          background-color: royalblue;
          height: 600px;
        }
        .bottom__container {
          padding: 2% 0 0 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
}
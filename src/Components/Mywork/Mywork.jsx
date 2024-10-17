import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
const Mywork = () => {
  return (
    <div className='my-work'>
      <div className="title">
        <h1 className='heading'>My Latest Work</h1>
        <img className='title-img' src={theme_pattern} alt="" />
      </div>
      <div className="my-work-container">
        {mywork_data.map((work ,index) => {
            return <div key={index} className="mywork-format">
                <img src={work.w_img} alt="" />
            </div>
        })}
      </div>
      <div className="mywork-showmore">
        <button>
            Show more
            <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Mywork

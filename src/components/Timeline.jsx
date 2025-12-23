import React from 'react';
import timelineElements from '../timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {ReactComponent as Work} from "../img/work.svg";
import {ReactComponent as Study} from "../img/school.svg";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";


const Timeline = (props) => {

    let workIconStyle = {background: "var(--purplelight)"};
    let studyIconStyle = { background:"var(--purpleultralight)"}

    
  return (
    <div className='timeline' id='Timeline'>
        <div className="tl-left">
            <span>My <span>Timeline</span></span>  
        </div>
        <div className="tl-right">
        <VerticalTimeline lineColor='var(--purpleultralight)'>
            {
                timelineElements.map(element => {
                    const isWorkIcon = element.icon === "work";
                    return(
                        <VerticalTimelineElement
                        className='verticalTimelineElement'
                        key={element.key}
                        date={element.date}
                        iconStyle={isWorkIcon ? workIconStyle : studyIconStyle}
                        iconClassName='icon'
                        icon={isWorkIcon ? <Work/> : <Study/>}
                        >
                            <h3 >{element.title}</h3>
                            <h5 >{element.location}</h5>
                            <p id='description'>{element.description}</p>
                        </VerticalTimelineElement>
                    )
                })
            }    
        </VerticalTimeline>
        </div>
    </div>
  )
};

export default Timeline;
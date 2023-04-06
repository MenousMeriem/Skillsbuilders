import { Calendar, momentLocalizer,Views } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'

const localizer = momentLocalizer(moment) // or globalizeLocalizer
const allViews = Object.keys(Views).map(k => Views[k]);

let myEventsList= [
    {
      'title': 'MAGGMAGG',
      'allDay': true,
      'start': new Date(2023, 4, 6),
      'end': new Date(2023, 4, 7)
    },
    {
      'title': 'EZZINE',
      'start': new Date(2023, 4, 25),
      'end': new Date(2023, 4, 26)
    },
]

const Calendarr = (props) => (
   
   <div className="myCustomHeight "style={{ height: 700 }}>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      views={allViews}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

export default Calendarr
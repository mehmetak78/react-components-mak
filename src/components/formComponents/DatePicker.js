import React, {useEffect, useState} from 'react';
import {format, startOfMonth, endOfMonth, getDay, parse, subMonths, addMonths} from "date-fns"

const closeAllDatePickerSelectors = () => {
  const allDatePickerSelectors = document.querySelectorAll(".date-picker-selector");
  allDatePickerSelectors.forEach(selector=> {
    selector.classList.remove("date-picker-selector-active");
  })
  const formButtons = document.querySelector(".form-btn-group");
  formButtons.classList.remove("form-btn-group-stop-hover");
}

const DatePicker = (props) => {
  const {className, name, label,required} = props;

  const [date, setDate] = useState();
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    const today = Date.now();
    setDate(today);
    setSelectedDate(today);
    // eslint-disable-next-line
  }, []);

  const datePickerMainClicked = (e) => {
    const datePickerSelector = e.target.querySelector(".date-picker-selector");
    if (datePickerSelector) {
      datePickerSelector.classList.toggle("date-picker-selector-active");
      const formButtons = document.querySelector(".form-btn-group");
      formButtons.classList.add("form-btn-group-stop-hover");
    }
  }
  const preMonthClicked = () => {
    setDate(subMonths(date,1));
  }

  const nextMonthClicked = () => {
    setDate(addMonths(date,1));
  }

  const dayClicked = (e) => {
    let dayId = format(selectedDate,"d/MM/yyyy");
    dayId = e.target.id;
    setSelectedDate(parse(dayId,"d/MM/yyyy",date));
    const datePickerSelector = e.target.parentNode.parentNode;
    datePickerSelector.classList.remove("date-picker-selector-active");
  }
  const renderDays = () => {

    if (date) {
      const today = Date.now();
      const todayYear = format(today,"yyyy");
      const todayMonth = format(today,"MM");
      const todayDay = format(today,"d");
      let dateMonth = format(date,"MM");
      let selectedMonth = format(selectedDate,"MM");
      let selectedYear = format(selectedDate,"yyyy");
      let selectedDay = format(selectedDate,"d");
      let monthStart = startOfMonth(date);
      let monthEnd = endOfMonth(date);
      let monthStartDayOfWeek = getDay(monthStart);
      if (monthStartDayOfWeek == 0) {
        monthStartDayOfWeek = 7;
      }
      let lastDayOfMonth = format(monthEnd,"d");
      const days = [];
      if (monthStartDayOfWeek>=0) {
        const preMonthDate = subMonths(date,1);
        let lastDayOfPreMonth = format(endOfMonth(preMonthDate),"d");
        for (let i = 1; i < monthStartDayOfWeek; i++) {
          days.push(<div className="day pre-month-day">{lastDayOfPreMonth-monthStartDayOfWeek+1+i}</div>)
        }
      }
      for (let i=1;i<=lastDayOfMonth;i++) {
        const dayId = i +'/'+dateMonth+'/'+date_year
        if (date_year === todayYear && dateMonth === todayMonth && i==todayDay) {
          if (todayDay === selectedDay) {
            days.push(<div className="day day-today day-active" id={dayId} onClick={dayClicked}> {i} </div>)
          }
          else {
            days.push(<div className="day day-today" id={dayId} onClick={dayClicked}> {i} </div>)
          }
        }
        else if (date_year === selectedYear && dateMonth === selectedMonth && i==selectedDay) {
          days.push(<div className="day day-active"  id={dayId} onClick={dayClicked}> {i} </div>)
        } else {
          days.push(<div className="day" id={dayId} onClick={dayClicked}> {i} </div>)
        }
      }
      let nextMonthDayCount = 7 - ((parseInt(monthStartDayOfWeek) - 1 + parseInt(lastDayOfMonth)) % 7);
      if (nextMonthDayCount==7) {
        nextMonthDayCount = 0
      }
      for (let i = 1; i <= nextMonthDayCount; i++) {
        days.push(<div className="day next-month-day">{i}</div>)
      }

      return days;
    }
    return null;
  }

  const classNameForRequired = required ? " required": " ";
  let date_month_label;
  let date_year;
  let date_label;
  if (date) {
    date_month_label = format(date, "MMMM");
    date_year = format(date, "yyyy");
    date_label =format(selectedDate,"dd/MM/yyyy");
  }
  return (
    <div className= {"date-picker " + className}>
      <div className={"date-picker-input " + classNameForRequired} onClick={datePickerMainClicked}>
        {date_label}
        <div className="date-picker-selector  ">
          <div className="date-picker-month-selector">
            <div className="left-button" onClick={preMonthClicked}>
              &#60;
            </div>
            <div className="date-picker-month">
              {date_month_label}, {date_year}
            </div>
            <div className="right-button" onClick={nextMonthClicked}>
              &#62;
            </div>
          </div>
          <div className="date-picker-day-labels">
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Thu</span>
            <span>Fr</span>
            <span>Sa</span>
            <span>Su</span>
          </div>
          <div className="date-picker-days">
            {renderDays()}
          </div>
        </div>
      </div>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

DatePicker.defaultProps = {
  id: "",
  name: "",
  label: "Label",
  required: false,
}

export default DatePicker;
export {DatePicker, closeAllDatePickerSelectors};

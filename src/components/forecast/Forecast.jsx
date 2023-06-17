import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './Forecast.css';
const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  const dayWeekly = new Date().getDay();
  const forecastWeek = WEEK_DAYS.slice(dayWeekly, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayWeekly)
  );
  console.log(forecastWeek);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="weather"
                      className="icon-small"
                    />
                    <label className="day">{forecastWeek[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}℃ /
                      {Math.round(item.main.temp_max)}℃
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};
export default Forecast;

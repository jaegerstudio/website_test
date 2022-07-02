import React, { useState, useEffect } from "react";
import Select from "react-select";
//import {Select, MenuItem, } from '@mui/material'
//src
import "./UpcomingEvents.scss";
import { getMonth } from "../../parser";
import { getEventTypes, getPeopleSpeakers, getFilterUpcomming } from "../action";

const UpcomingEvents = (upcomingEvents) => {
  const [eventTypes, setEventTypes] = useState([]);
  const [speakers,setSpeakers] = useState([])
  const [allEvent,setAllEvent] = useState(upcomingEvents.upcomingEvents);
  const [upcomingEventsData, setUpcomingEventsData] = useState(
    upcomingEvents.upcomingEvents
  );
  const [tags,setTags] = useState([])
  useEffect(() => {
    setUpcomingEventsData(upcomingEvents.upcomingEvents);
    setAllEvent(upcomingEvents.upcomingEvents)
  }, [upcomingEvents]);

  useEffect(() => {
    getEventTypes({callback: (res) => setEventTypes(
      res.map(type => 
        ({ value: type.value , label: type.label }))
    )})
    getPeopleSpeakers({callback: (res) => setSpeakers(res)})
  },[])

  useEffect(() => {
    tags.length === 0 && setUpcomingEventsData(allEvent)
  },[tags])

  const getDate = (date) => {
    return new Date(date).getDate();
  };
  const uniqueArray = (array,key) => {
    if (typeof key !== "function") {
      const property = key;
      key = function (item) {
        return item[property];
      };
    }
    return Array.from(
      array
        .reduce(function (map, item) {
          const k = key(item);
          if (!map.has(k)) map.set(k, item);
          return map;
        }, new Map())
        .values(),
    );
  }
  const handleEventFilter =(e) => {
    var eventId = e.value
    setTags(uniqueArray([{id:e.value,name:e.label},...tags],"id"))
    getFilterUpcomming({eventId, callback: (res) => setUpcomingEventsData(res)})
  }
  return (
    <>
      {upcomingEventsData.length !== 0 && (
        <div className="upcoming-events-main">
          <div className="upcoming-events-head">
            <p className="title">Upcoming Events</p>

            <div className="upcoming-events-head-option">
              <input
                type="date"
                className="date-pick"
                onKeyDown={(e) => e.preventDefault()}
              />
              <Select
                placeholder="Event Type"
                onChange={(e) => handleEventFilter(e)}
                options={eventTypes}
              />
            </div>
          </div>
          <div className="upcoming-events-tags">
            {tags.map((tag, index) => (
              <div className="tag" key={tag.id}>
                <span>{tag.name}</span>
                <svg
                  onClick={() => {
                    setTags(tags.filter(item => item.id !== tag.id ))
                  }}
                  className="upcoming-events-tags-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 6.415L17.585 5L12 10.585L6.415 5L5 6.415L10.585 12L5 17.585L6.415 19L12 13.415L17.585 19L19 17.585L13.415 12L19 6.415Z" />
                </svg>
              </div>
            ))}
          </div>
          <div className="upcoming-events-cards-main">
            {upcomingEventsData.items.map((data,index) => (
              <div className="upcoming-events-card" key={index}>
                <img className="upcoming-events-card-img"
                  src={data.image.meta.download_url}
                  alt="event-card"
                />
                <div className="upcoming-event-card-detail">
                  <div>
                    <p className="month">{getMonth(data.schedule_begin)}</p>
                    <p className="day">{getDate(data.schedule_begin)}</p>
                  </div>
                  <div>
                    <p className="event-heading">{data.title}</p>
                    <p className="time">
                      {data.schedule_begin.substring(11, 16) +
                        " - " +
                        data.schedule_end.substring(11, 16)}
                    </p>
                    <div className="upcoming-event-speakers">
                      {speakers.map((speaker) => (
                        <img 
                        src={speaker.people.avatar.download_url} 
                        alt="speaker" title={speaker.people.full_name}
                        width='36px'
                        height='36px' 
                        />
                      ))}
                    </div>
                    <p className="event-desc">{data.hero_text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default UpcomingEvents;

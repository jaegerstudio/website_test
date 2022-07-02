import React, { useState, useEffect } from "react";
import Select from "react-select";

//src
import "./RecentEvents.scss";
import { getMonth } from "../../parser";
import { getEventTypes, getPeopleSpeakers, getFilterRecent } from "../action";

const RecentEvents = (recentEvents) => {
  const [eventTypes, setEventTypes] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [allEvent, setAllEvent] = useState(recentEvents.recentEvents);
  const [recentEventsData, setRecentEventsData] = useState(
    recentEvents.recentEvents
  );
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setRecentEventsData(recentEvents.recentEvents);
    setAllEvent(recentEvents.recentEvents);
  }, [recentEvents]);

  useEffect(() => {
    getEventTypes({
      callback: (res) =>
        setEventTypes(
          res.map((type) => ({ value: type.value, label: type.label }))
        ),
    });
    getPeopleSpeakers({ callback: (res) => setSpeakers(res) });
  }, []);

  useEffect(() => {
    tags.length === 0 && setRecentEventsData(allEvent);
  }, [tags]);

  const getDate = (date) => {
    return new Date(date).getDate();
  };
  const uniqueArray = (array, key) => {
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
        .values()
    );
  };
  const handleEventFilter = (e) => {
    var eventId = e.value;
    setTags(uniqueArray([{ id: e.value, name: e.label }, ...tags], "id"));
    getFilterRecent({ eventId, callback: (res) => setRecentEventsData(res) });
  };
  // const colourStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     backgroundColor: "#ffffff",
  //     color: "#000000",
  //     padding: 8,
  //   }),
  //   control: () => ({
  //     // none of react-select's styles are passed to <Control />
  //     width: 168,
  //     backgroundColor: "black",

  //     borderRadius: 8,
  //     display: "flex",
  //     paddingLeft: 24,
  //     paddingRight: 24,
  //     paddingTop: 17,
  //     paddingBottom: 17,
  //   }),
  //   // placeholder: (provided, state) => ({
  //   //   display: "none",
  //   //   color: "white",
  //   // }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = "opacity 300ms";

  //     return { ...provided, opacity, transition };
  //   },
  // };
  return (
    <>
      {recentEventsData.length !== 0 && (
        <div className="recents-events-main">
          <div className="recents-events-head">
            <p className="title">Recent Events</p>
            <div className="recents-events-head-option">
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
          <div className="recents-events-tags">
            {tags.map((tag, index) => (
              <div className="tag" key={tag.id}>
                <span>{tag.name}</span>
                <svg
                  onClick={() => {
                    setTags(tags.filter((item) => item.id !== tag.id));
                  }}
                  className="recents-events-tags-svg"
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
          <div className="recents-events-cards-main">
            {recentEventsData.items.map((data, index) => (
              <div className="recents-events-card" key={index}>
                <img
                  className="recents-events-card-img"
                  src={data.image.meta.download_url}
                  alt="event-card"
                />
                <div className="recents-event-card-detail">
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
                    <div className="recents-event-speakers">
                      {speakers.map((speaker) => (
                        <img
                          src={speaker.people.avatar.download_url}
                          alt="speaker"
                          title={speaker.people.full_name}
                          width="36px"
                          height="36px"
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
export default RecentEvents;

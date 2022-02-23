import { useState, useEffect } from "react";
import MeetupList from "../components/meetup/MeetupList";


function AllMeetupsPage() {

      const [isLoading, setIsLoading] = useState(true)
      const [loadMeetups, setLoadedMeetups] = useState([]);

      useEffect(() => {
        fetch(
          'https://react-eshop-aa8a2-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
          return response.json()
        }).then( data => {
          const meetups = [];
          for(const key in data) {
            const meetup = {
              id: key,
              ...data[key]
            };
            meetups.push(meetup)
          }
          setIsLoading(false)
          setLoadedMeetups(meetups)
        })
      }, [])

      

      if(isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }

    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadMeetups}/>
        </section>
    )
}

export default AllMeetupsPage;
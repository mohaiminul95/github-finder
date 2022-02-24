import { useNavigate } from 'react-router-dom'
import NewMeetupForm from '../components/meetup/NewMeetupForm';

function NewMeetupPage() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-eshop-aa8a2-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        }); 
    }

    return( 
        <section>
            <h1>Add New Meetups</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;
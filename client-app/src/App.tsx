import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Container, Header } from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(response => {
        setActivities(response.data) 
    })
  }, [])

  return (
    <Container text>
      <div></div>
      <Header as='h1' content='Reactivities'/>
      <ul>
        {activities.map((activity: any) => (
          <li key={activity.id}> {activity.title} </li>
        ))}
      </ul>
    </Container>
  )
}

export default App

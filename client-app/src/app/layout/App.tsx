import { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectActivity, setSelectActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response => {
        setActivities(response.data) 
    })
  }, [])

  function handleSelectActivity(id: string){
    setSelectActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity(){
    setSelectActivity(undefined);
  }

  function handleFormOpen(id?: string){
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleDeleteActivity(id: string){
    setActivities([...activities.filter(x => x.id !== id)])
  }

  function handleCreateOrEditActivity(activity: Activity){
    activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, {...activity, id: uuid()}])
      setEditMode(false)
      setSelectActivity(activity)
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: '5em'}}>
          <ActivityDashboard 
            activities={activities}
            selectedActivity={selectActivity}
            selectActivity={handleSelectActivity}
            cancelSelectedActivity={handleCancelSelectActivity}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateOrEditActivity}
            deleteActivity={handleDeleteActivity}
          ></ActivityDashboard>
      </Container>
    </>
  )
}

export default App

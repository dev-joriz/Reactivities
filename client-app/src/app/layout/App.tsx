import { useEffect } from 'react'
import './styles.css'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import Load from './Load';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {

  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if(activityStore.loadingInitial) return <Load></Load>

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '5em'}}>
          <ActivityDashboard />
      </Container>
    </>
  )
}

export default observer(App)

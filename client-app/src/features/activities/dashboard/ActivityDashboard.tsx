import { Grid, List } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Load from "../../../app/layout/Load";
import ActivityFilters from "./ActivityFilters";

export default observer (function ActivityDashboard(){

    const {activityStore,} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
      if(activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities])
  
    if(activityStore.loadingInitial) return <Load></Load>
    
    return (
        <Grid>
           <Grid.Column width='10'>
                <List>
                    <ActivityList />
                </List>
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters/>
            </Grid.Column> 
        </Grid>
    )
})
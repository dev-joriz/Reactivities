import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectedActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({
    activities, 
    selectedActivity, 
    selectActivity, 
    cancelSelectedActivity,
    editMode,
    openForm,
    closeForm,
    createOrEdit,
    deleteActivity} : Props){
    
    return (
        <Grid>
           <Grid.Column width='10'>
                <List>
                    <ActivityList 
                        activities={activities} 
                        selectActivity={selectActivity} 
                        selectedActivity={selectedActivity} 
                        cancelSelectedActivity={cancelSelectedActivity}
                        deleteActivity={deleteActivity}>
                    </ActivityList>
                </List>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode && <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectedActivity={cancelSelectedActivity}
                    openForm={openForm}></ActivityDetails>}
                {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}></ActivityForm>}
            </Grid.Column> 
        </Grid>
    )
}
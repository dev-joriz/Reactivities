import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props{
    activities : Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectedActivity: () => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({activities, selectActivity, cancelSelectedActivity, deleteActivity}: Props){
    return (
        <Segment>
            <Item.Group divided>
                {
                    activities.map(activity => (
                        <Item key={activity.id}>
                            <Item.Content>
                                <Item.Header as='a'>{activity.title}</Item.Header>
                                <Item.Meta>{activity.date}</Item.Meta>
                                <Item.Description>
                                    <div>{activity.description}</div>
                                    <div>{activity.city}, {activity.venue}</div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button onClick={() => deleteActivity(activity.id)} floated='right' content='Delete' color='red'></Button>
                                    <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue'></Button>
                                    <Label onClick={() => cancelSelectedActivity()} basic content={activity.category}></Label>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))
                }
            </Item.Group>
        </Segment>
    )
}
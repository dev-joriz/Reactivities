import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import Load from "../../../app/layout/Load";
import { observer } from "mobx-react-lite";

export default observer (function ActivityDetails(){

    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

    if(!activity) return <Load></Load>;

    return (
        <>
            <Card fluid>
                <Image src={`/Assets/categoryImages/${activity.category}.jpg`}></Image>
                <Card.Content>
                    <Card.Header>{activity.title}</Card.Header>
                    <Card.Meta>{activity.date}</Card.Meta>
                    <Card.Description>{activity.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Button.Group widths='2'>
                        <Button basic onClick={() => openForm(activity.id)} color="blue" content="Edit"></Button>
                        <Button basic onClick={() => cancelSelectedActivity()} color="red" content="Cancel"></Button>
                   </Button.Group>
                </Card.Content>
            </Card>
        </>
    )
})
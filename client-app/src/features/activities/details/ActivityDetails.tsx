import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props {
    activity: Activity,
    cancelSelectedActivity: () => void;
    openForm: (is: string) => void
}

export default function ActivityDetails({activity, cancelSelectedActivity, openForm} : Props){
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
                        <Button basic onClick={cancelSelectedActivity} color="red" content="Cancel"></Button>
                   </Button.Group>
                </Card.Content>
            </Card>
        </>
    )
}
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import Load from "../../../app/layout/Load";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSideBar from "./ActivityDetailSideBar";

export default observer (function ActivityDetails(){

    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity: loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if(id) loadActivity(id);
    }, [id, loadActivity])

    if(loadingInitial || !activity) return <Load></Load>;

    return (
        <>
            <Grid>
                <Grid.Column width={10}>
                    <ActivityDetailHeader activity={activity}></ActivityDetailHeader>
                    <ActivityDetailInfo activity={activity}></ActivityDetailInfo>
                    <ActivityDetailChat></ActivityDetailChat>
                </Grid.Column>
                <Grid.Column width={6}>
                    <ActivityDetailSideBar></ActivityDetailSideBar>
                </Grid.Column>
            </Grid>

            {/* <Card fluid>
                <Image src={`/Assets/categoryImages/${activity.category}.jpg`}></Image>
                <Card.Content>
                    <Card.Header>{activity.title}</Card.Header>
                    <Card.Meta>{activity.date}</Card.Meta>
                    <Card.Description>{activity.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Button.Group widths='2'>
                        <Button as={Link} to={`/update/${activity.id}`} basic color="blue" content="Edit"></Button>
                        <Button as={Link} to='/activities' basic color="red" content="Cancel"></Button>
                   </Button.Group>
                </Card.Content>
            </Card> */}
        </>
    )
})
import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/Activity";
import Load from "../../../app/layout/Load";
import { v4 as uuid } from 'uuid';

export default observer (function ActivityForm(){

    const {activityStore} = useStore();
    const {loading, createActivity, updateActivity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        date: '',
        description: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if(id) loadActivity(id).then(activity => {
            setActivity(activity!);
        })
    }, [id, loadActivity])

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value, })
    }

    function handleSubmit(){
        if(!activity.id){
            activity.id = uuid();
            createActivity(activity).then(() => {
                navigate(`/activities/${activity.id}`)
            });
        }
        else{
            updateActivity(activity).then(() => {
                navigate(`/activities/${activity.id}`)
            })
        }
    }

    if(loadingInitial) return <Load content="Loanding Activity. . ."></Load>

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange}></Form.Input>
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}></Form.TextArea>
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange}></Form.Input>
                <Form.Input type="date" placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange}></Form.Input>
                <Button loading={loading} floated='right' positive type='submit' content='Submit'></Button>
                <Button  as={Link} to='/activities' floated='right' type='submit' content='Cancel'></Button>
            </Form>
        </Segment>
    )
})
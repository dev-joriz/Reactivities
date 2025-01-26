import { Button, Container, Menu } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

export default observer (function NavBar() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/Assets/logo.png" alt="logo" style={{marginRight: '15px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name="Activities"></Menu.Item>
                <Menu.Item>
                    <Button as={NavLink} to='/create' positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
})
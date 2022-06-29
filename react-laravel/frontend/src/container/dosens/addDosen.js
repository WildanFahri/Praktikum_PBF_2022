import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
export default class AddDosen extends Component {
    render() {
        return (
            <div>
                <Button
                    className="mb-4"
                    color="primary"
                    style={{ float: "right" }}
                    onClick={this.props.toggleNewDosenModal}
                >
                    Add Dosen
                </Button>
                <Modal
                    isOpen={this.props.newDosenModal}
                    toggle={this.props.toggleNewDosenModal}
                >
                    <ModalHeader
                        toggle={this.props.toggleNewDosenModal}>
                        Add new Dosen
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="first_name">First Name</Label>
                            <Input
                                id="first_name"
                                name="first_name"
                                className="my-3"
                                value={this.props.newDosenData.first_name}
                                onChange={this.props.onChangeAddDosenHandler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Last Name</Label>
                            <Input
                                id="last_name"
                                name="last_name"
                                className="my-3"
                                value={this.props.newDosenData.last_name}
                                onChange={this.props.onChangeAddDosenHandler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                className="my-3"
                                value={this.props.newDosenData.title}
                                onChange={this.props.onChangeAddDosenHandler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                className="my-3"
                                value={this.props.newDosenData.email}
                                onChange={this.props.onChangeAddDosenHandler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input
                                id="phone"
                                name="phone"
                                className="my-3"
                                value={this.props.newDosenData.phone}
                                onChange={this.props.onChangeAddDosenHandler}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() =>
                            this.props.addDosen()}>
                            Add
                        </Button>
                        <Button
                            color="secondary"
                            onClick={this.props.toggleNewDosenModal}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
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
export default class EditDosen extends Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.editDosenModal}
                    toggle={this.props.toggleEditDosenModal}
                >
                    <ModalHeader
                        toggle={this.props.toggleEditDosenModal}>
                        Update Dosen
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="first_name">First Name</Label>
                            <Input
                                id="first_name"
                                name="first_name"
                                className="my-3"
                                value={this.props.editDosenData.first_name}
                                onChange={this.props.onChangeEditDosenHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Last Name</Label>
                            <Input
                                id="last_name"
                                name="last_name"
                                className="my-3"
                                value={this.props.editDosenData.last_name}
                                onChange={this.props.onChangeEditDosenHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                className="my-3"
                                value={this.props.editDosenData.title}
                                onChange={this.props.onChangeEditDosenHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                className="my-3"
                                value={this.props.editDosenData.email}
                                onChange={this.props.onChangeEditDosenHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input
                                id="phone"
                                name="phone"
                                className="my-3"
                                value={this.props.editDosenData.phone}
                                onChange={this.props.onChangeEditDosenHanler}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                            onClick={this.props.updateDosen}>
                            Update
                        </Button>
                        <Button
                            color="secondary"
                            onClick={this.props.toggleEditDosenModal}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
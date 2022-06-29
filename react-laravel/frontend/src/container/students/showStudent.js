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
export default class showStudent extends Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.showStudentModal}
                    toggle={this.props.toggleshowStudentModal}
                >
                    <ModalHeader
                        toggle={this.props.toggleshowStudentModal}>
                        Student Detail
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="first_name">Name = {this.props.showStudentData.first_name} {this.props.showStudentData.last_name}</Label>
                            {/* <Label
                                id="first_name"
                                name="first_name"
                                className="my-3"
                                value={this.props.showStudentData.first_name}
                            // onChange={this.props.onChangeshowStudentHanler}
                            /> */}
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="last_name">Last Name</Label>
                            <Label
                                id="last_name"
                                name="last_name"
                                className="my-3"
                                value={this.props.showStudentData.last_name}
                            // onChange={this.props.onChangeshowStudentHanler}
                            />
                        </FormGroup> */}
                        <FormGroup>
                            <Label for="email">Email = {this.props.showStudentData.email}</Label>
                            {/* <Label
                                id="email"
                                name="email"
                                className="my-3"
                                value={this.props.showStudentData.email}
                            // onChange={this.props.onChangeshowStudentHanler}
                            /> */}
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone = {this.props.showStudentData.phone}</Label>
                            {/* <Label
                                id="phone"
                                name="phone"
                                className="my-3"
                                value={this.props.showStudentData.phone}
                            // onChange={this.props.onChangeshowStudentHanler}
                            /> */}
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary"
                            onClick={this.props.updateStudent}>
                            Update
                        </Button> */}
                        <Button
                            color="secondary"
                            onClick={this.props.toggleShowStudentModal}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
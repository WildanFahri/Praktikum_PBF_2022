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
export default class showDosen extends Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.showDosenModal}
                    toggle={this.props.toggleshowDosenModal}
                >
                    <ModalHeader
                        toggle={this.props.toggleshowDosenModal}>
                        Dosen Detail
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="first_name">Name = {this.props.showDosenData.first_name} {this.props.showDosenData.last_name}, {this.props.showDosenData.title}</Label>
                            {/* <Label
                                id="first_name"
                                name="first_name"
                                className="my-3"
                                value={this.props.showDosenData.first_name}
                            // onChange={this.props.onChangeshowDosenHanler}
                            /> */}
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="last_name">Last Name</Label>
                            <Label
                                id="last_name"
                                name="last_name"
                                className="my-3"
                                value={this.props.showDosenData.last_name}
                            // onChange={this.props.onChangeshowDosenHanler}
                            />
                        </FormGroup> */}
                        <FormGroup>
                            <Label for="email">Email = {this.props.showDosenData.email}</Label>
                            {/* <Label
                                id="email"
                                name="email"
                                className="my-3"
                                value={this.props.showDosenData.email}
                            // onChange={this.props.onChangeshowDosenHanler}
                            /> */}
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone = {this.props.showDosenData.phone}</Label>
                            {/* <Label
                                id="phone"
                                name="phone"
                                className="my-3"
                                value={this.props.showDosenData.phone}
                            // onChange={this.props.onChangeshowDosenHanler}
                            /> */}
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary"
                            onClick={this.props.updateDosen}>
                            Update
                        </Button> */}
                        <Button
                            color="secondary"
                            onClick={this.props.toggleShowDosenModal}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
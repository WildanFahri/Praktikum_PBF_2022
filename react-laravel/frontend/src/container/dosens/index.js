import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import AddDosen from "./addDosen";
import EditDosen from "./editDosen";
import ShowDosen from "./showDosen";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Dosen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dosens: [],
            newDosenData: {
                first_name: "",
                last_name: "",
                title: "",
                email: "",
                phone: "",
            },
            isLoading: false,
            status: "",
            newDosenModal: false,
            editDosenData: {
                id: "",
                first_name: "",
                last_name: "",
                title: "",
                email: "",
                phone: "",
            },
            showDosenModal: false,
            showDosenData: {
                id: "",
                first_name: "",
                last_name: "",
                title: "",
                email: "",
                phone: "",
            },
            editDosenModal: false,
            noDataFound: "",
        };
    }
    componentDidMount() {
        this.getDosens();
    }
    getDosens() {
        axios.get("http://localhost:8000/api/dosens").then((response) => {
            if (response.status === 200) {
                this.setState({
                    dosens: response.data.data ?
                        response.data.data : [],
                });
            }
            if (
                response.data.status === "failed" &&
                response.data.success === false
            ) {
                this.setState({
                    noDataFound: response.data.message,
                });
            }
        });
    }
    toggleNewDosenModal = () => {
        this.setState({
            newDosenModal: !this.state.newDosenModal,
        });
    };
    onChangeAddDosenHandler = (e) => {
        let { newDosenData } = this.state;
        newDosenData[e.target.name] = e.target.value;
        this.setState({ newDosenData });
    };
    addDosen = () => {
        axios
            .post(
                "http://localhost:8000/api/create-dosen",
                this.state.newDosenData
            )
            .then((response) => {
                const { dosens } = this.state;
                const newDosens = [...dosens];
                newDosens.push(response.data);
                this.setState(
                    {
                        dosens: newDosens,
                        newDosenModal: false,
                        newDosenData: {
                            first_name: "",
                            last_name: "",
                            title: "",
                            email: "",
                            phone: "",
                        },
                    },
                    () => this.getDosens()
                );
            });
    };
    toggleEditDosenModal = () => {
        this.setState({
            editDosenModal: !this.state.editDosenModal,
        });
    };
    toggleShowDosenModal = () => {
        this.setState({
            showDosenModal: !this.state.showDosenModal,
        });
    };
    onChangeEditDosenHanler = (e) => {
        let { editDosenData } = this.state;
        editDosenData[e.target.name] = e.target.value;
        this.setState({ editDosenData });
    };
    onChangeShowDosenHanler = (e) => {
        let { showDosenData } = this.state;
        showDosenData[e.target.name] = e.target.value;
        this.setState({ showDosenData });
    };
    editDosen = (id, first_name, last_name, title, email, phone) => {
        this.setState({
            editDosenData: {
                id, first_name, last_name, title, email,
                phone
            },
            editDosenModal: !this.state.editDosenModal,
        });
    };
    showDosen = (id, first_name, last_name, title, email, phone) => {
        this.setState({
            showDosenData: {
                id, first_name, last_name, title, email,
                phone
            },
            showDosenModal: !this.state.showDosenModal,
        });
    };
    updateDosen = () => {
        let { id, first_name, last_name, title, email, phone } =
            this.state.editDosenData;
        this.setState({
            isLoading: true,
        });
        axios
            .post("http://localhost:8000/api/create-dosen", {
                first_name,
                last_name,
                title,
                email,
                phone,
                id,
            })
            .then((response) => {
                this.getDosens();
                this.setState({
                    editDosenModal: false,
                    editDosenData: {
                        first_name, last_name, title, email,
                        phone
                    },
                    isLoading: false,
                });
            })
            .catch((error) => {
                this.setState({ isLoading: false });
                console.log(error.response);
            });
    };
    deletDosen = (id) => {
        this.setState({
            isLoading: true,
        });
        axios
            .delete("http://localhost:8000/api/dosen/" + id)
            .then((response) => {
                this.setState({
                    isLoading: false,
                });
                this.getDosens();
            })
            .catch((error) => {
                this.setState({
                    isLoading: false,
                });
            });
    };

    render() {
        const { newDosenData, editDosenData, noDataFound, showDosenData,
            dosens } =
            this.state;
        let dosensDetails = [];
        if (dosens.length) {
            dosensDetails = dosens.map((dosen) => {
                return (
                    <tr key={dosen.id}>
                        <td>{dosen.id}</td>
                        <td>{dosen.first_name}</td>
                        <td>{dosen.last_name}</td>
                        <td>{dosen.title}</td>
                        <td>{dosen.full_name}</td>
                        <td>{dosen.email}</td>
                        <td>{dosen.phone}</td>
                        <td>
                            <Button
                                color="success"
                                size="sm"
                                style={{ marginRight: 10 }}
                                onClick={() =>
                                    this.editDosen(
                                        dosen.id,
                                        dosen.first_name,
                                        dosen.last_name,
                                        dosen.title,
                                        dosen.email,
                                        dosen.phone
                                    )
                                }
                            >
                                Edit
                            </Button>
                            <Button
                                color="danger"
                                size="sm"
                                style={{ marginRight: 10 }}
                                onClick={() =>
                                    this.deletDosen(dosen.id)}
                            >
                                Delete
                            </Button>
                            <Button
                                color="primary"
                                size="sm"
                                onClick={() =>
                                    this.showDosen(
                                        dosen.id,
                                        dosen.first_name,
                                        dosen.last_name,
                                        dosen.title,
                                        dosen.email,
                                        dosen.phone
                                    )
                                }
                            >
                                Show
                            </Button>
                        </td>
                    </tr>
                );
            });
        }
        if (this.state.isLoading) {
            return (
                <div className="spinner-border text-center"
                    role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }
        return (
            <div className="App container mt-4">
                <h4 className="font-weight-bold">Dosens
                    Registration</h4>
                {/* Model for Add Studnet Record */}
                <AddDosen
                    toggleNewDosenModal={this.toggleNewDosenModal}
                    newDosenModal={this.state.newDosenModal}
                    onChangeAddDosenHandler={this.onChangeAddDosenHandler}
                    addDosen={this.addDosen}
                    newDosenData={newDosenData}
                />
                {/* Model for Edit Studnet Record */}
                <EditDosen
                    toggleEditDosenModal={this.toggleEditDosenModal}
                    editDosenModal={this.state.editDosenModal}
                    onChangeEditDosenHanler={this.onChangeEditDosenHanler}
                    editDosen={this.editDosen}
                    editDosenData={editDosenData}
                    updateDosen={this.updateDosen}
                />
                <ShowDosen
                    toggleShowDosenModal={this.toggleShowDosenModal}
                    showDosenModal={this.state.showDosenModal}
                    onChangeShowDosenHanler={this.onChangeShowDosenHanler}
                    showDosen={this.showDosen}
                    showDosenData={showDosenData}
                // updateDosen={this.updateDosen}
                />
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Title</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {dosens.length === 0 ? (
                        <tbody>
                            <h3>{noDataFound}</h3>
                        </tbody>
                    ) : (
                        <tbody>{dosensDetails}</tbody>
                    )}
                </Table>
            </div>
        );
    }
}
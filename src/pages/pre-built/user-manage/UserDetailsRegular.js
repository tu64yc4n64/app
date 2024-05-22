import React, { useContext, useEffect, useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import ProductH from "../../../images/avatar/a-sm.jpg"
import { DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle, Modal, ModalBody, CardBody, CardSubtitle, CardTitle, CardText, CardLink } from "reactstrap";
import AddMeetModal from "./AddMeetModal";
import { meetings } from "./meetingData";
import {
  Button,
  Block,
  BlockBetween,

  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableItem,

} from "../../../components/Component";

import { useNavigate, useParams } from "react-router-dom";
import { currentTime, findUpper, monthNames, todaysDate } from "../../../utils/Utils";
import { UserContext } from "./UserContext";
import { notes } from "./UserData";

const UserDetailsPage = () => {
  const { contextData } = useContext(UserContext);
  const [conversation, setConversation] = useState(meetings);
  const currentItems = conversation
  const [data] = contextData;
  const [sm, updateSm] = useState(false);
  const [sideBar, setSidebar] = useState(false);
  const [user, setUser] = useState();
  const [noteData, setNoteData] = useState(notes);
  const [addNoteModal, setAddNoteModal] = useState(false);
  const [addNoteText, setAddNoteText] = useState("");
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    type: "",
    notice: 0,

  });
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      balance: 0,
      phone: "",
      status: "Active",
    });
  };
  const closeModal = () => {
    setModal({ add: false })
    resetForm();
  };


  let { userId } = useParams();

  // grabs the id of the url and loads the corresponding data
  useEffect(() => {
    const id = userId;
    if (id !== undefined || null || "") {
      let spUser = data.find((item) => item.id === Number(id));
      setUser(spUser);
    } else {
      setUser(data[0]);
    }
  }, [data]);

  // function to toggle sidebar
  const toggle = () => {
    setSidebar(!sideBar);
  };

  useEffect(() => {
    sideBar ? document.body.classList.add("toggle-shown") : document.body.classList.remove("toggle-shown");
  }, [sideBar])

  // delete a note
  const deleteNote = (id) => {
    let defaultNote = noteData;
    defaultNote = defaultNote.filter((item) => item.id !== id);
    setNoteData(defaultNote);
  };

  const submitNote = () => {
    let submitData = {
      id: Math.random(),
      text: addNoteText,
      date: `${monthNames[todaysDate.getMonth()]} ${todaysDate.getDate()}, ${todaysDate.getFullYear()}`,
      time: `${currentTime()}`,
      company: "Softnio",
    };
    setNoteData([...noteData, submitData]);
    setAddNoteModal(false);
    setAddNoteText("");
  };
  const [onSearchText, setSearchText] = useState("");
  useEffect(() => {
    if (onSearchText !== "") {
      const filteredObject = meetings.filter((item) => {
        return item.date.toLowerCase().includes(onSearchText.toLowerCase());
      });
      setConversation([...filteredObject]);
    } else {
      setConversation([...meetings]);
    }
  }, [onSearchText]);
  const onFilterChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <Head title="User Details - Regular"></Head>
      {user && (
        <Content>
          <BlockHead size="sm">
            <BlockBetween>
              <BlockHeadContent>
                <BlockTitle tag="h3" page>
                  Kişiler / <strong className=" small">{user.name}</strong>

                </BlockTitle>
                <span className="badge bg-outline-secondary">{user.category}</span>

              </BlockHeadContent>
              <BlockHeadContent>
                <Button
                  color="light"
                  outline
                  className="bg-white d-none d-sm-inline-flex"
                  onClick={() => navigate(-1)}
                >
                  <Icon name="arrow-left"></Icon>
                  <span>Geri</span>
                </Button>
                <a
                  href="#back"
                  onClick={(ev) => {
                    ev.preventDefault();
                    navigate(-1);
                  }}
                  className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"
                >
                  <Icon name="arrow-left"></Icon>
                </a>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>


          <Block>

            <div>

              <div id="user-detail-block">
                <div className="row">

                  <div className="col-md-4">
                    <div className="card-bordered card" >
                      <CardBody className="card-inner">
                        <CardTitle tag="h6">Kişi Bilgileri</CardTitle>

                        <div>
                          <ul className="user-detail-info-list">
                            <li>
                              <Icon name="call-alt-fill"></Icon>
                              <strong className="ps-3">{user.phone}</strong>
                            </li>
                            <li>
                              <Icon name="mail-fill"></Icon>
                              <strong className="ps-3">{user.email}</strong>
                            </li>
                            <li>
                              <Icon name="user-fill"></Icon>
                              <strong className="ps-3">Murat Yol</strong>
                            </li>
                            <li>
                              <Icon name="ticket-fill"></Icon>
                              <strong className="ps-3"><span class="badge bg-outline-secondary">Etiket</span></strong>
                            </li>
                            <li>
                              <Icon name="calender-date-fill"></Icon>
                              <strong className="ps-3">14 Mayıs 2023 Tarihinde oluşturuldu.</strong>
                            </li>
                            <li>
                              <Icon name="calender-date-fill"></Icon>
                              <strong className="ps-3">18 Mayıs 2023 Tarihinde düzenlendi.</strong>
                            </li>
                          </ul>
                        </div>

                      </CardBody>


                    </div>
                    <div className="card-bordered card" >
                      <CardBody className="card-inner">
                        <CardTitle tag="h6">Adres</CardTitle>

                        <div className="d-flex">
                          <Icon style={{ position: "relative", top: "4px" }} name="map-pin-fill"></Icon>
                          <span>Hüseyin Yılmaz Cad. Pamukkale Üniversitesi Teknokent No:67 B Blok Z-12 Pamukkale / Denizli</span>
                        </div>

                      </CardBody>


                    </div>
                  </div>

                  {sideBar && <div className="toggle-overlay" onClick={() => toggle()}></div>}
                  <div className="col-md-8">

                    <div className="card-bordered card" >
                      <ul className="nav nav-tabs nav-tabs-mb-icon nav-tabs-card">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#personal"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                          >
                            <Icon name="user-circle"></Icon>
                            <span>Görüşmeler</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link disabled"
                            href="#transactions"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                          >
                            <Icon name="repeat"></Icon>
                            <span>Teklifler</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link disabled"
                            href="#documents"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                          >
                            <Icon name="file-text"></Icon>
                            <span>Notlar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link disabled"
                            href="#notifications"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                          >
                            <Icon name="file-text"></Icon>
                            <span>Dökümanlar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link disabled"
                            href="#activities"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                          >
                            <Icon name="bell"></Icon>
                            <span>Hatırlatıcılar</span>
                          </a>
                        </li>

                      </ul>

                      <div className="card-inner">
                        <BlockHeadContent>
                          <div className="toggle-wrap nk-block-tools-toggle">
                            <a
                              href="#more"
                              className="btn btn-icon btn-trigger toggle-expand me-n1"
                              onClick={(ev) => {
                                ev.preventDefault();
                                updateSm(!sm);
                              }}
                            >
                              <Icon name="more-v"></Icon>
                            </a>
                            <div className="pb-4" style={{ display: "flex", "justifyContent": "space-between" }}>
                              <ul className="nk-block-tools g-3">
                                <li>
                                  <div className="form-control-wrap">
                                    <div className="form-icon form-icon-left">
                                      <Icon name="search"></Icon>
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="default-04"
                                      placeholder="Görüşmelerde Ara"
                                      onChange={(e) => onFilterChange(e)}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <UncontrolledDropdown>
                                    <DropdownToggle
                                      color="transparent"
                                      className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                                    >
                                      Tür
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      <ul className="link-list-opt no-bdr">

                                      </ul>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </li>
                                <li>
                                  <UncontrolledDropdown>
                                    <DropdownToggle
                                      color="transparent"
                                      className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                                    >
                                      Tarih
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      <ul className="link-list-opt no-bdr">

                                      </ul>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </li>

                              </ul>
                              <div className="nk-block-tools-opt">
                                <Button
                                  className="toggle btn-icon d-md-none"
                                  color="primary"
                                  onClick={() => {
                                    toggle("add");
                                  }}
                                >
                                  <Icon name="plus"></Icon>
                                  <span>Görüşme Ekle</span>
                                </Button>
                                <Button
                                  className="toggle d-none d-md-inline-flex"
                                  color="primary"
                                  onClick={() => setModal({ add: true })}
                                >
                                  <Icon name="plus"></Icon>
                                  <span>Görüşme Ekle</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </BlockHeadContent>
                        <DataTableBody>

                          <DataTableHead>

                            <DataTableRow className="nk-tb-col-check">
                              <div className="custom-control custom-control-sm custom-checkbox notext">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="uid_1"

                                />
                                <label className="custom-control-label" htmlFor="uid_1"></label>
                              </div>
                            </DataTableRow>
                            <DataTableRow >
                              <span>Tarih</span>
                            </DataTableRow>
                            <DataTableRow size="md">
                              <span>Görüşme Türü</span>
                            </DataTableRow>
                            <DataTableRow>
                              <span>Notlar</span>
                            </DataTableRow>
                            <DataTableRow size="md">
                              <span>Temsilci</span>
                            </DataTableRow>


                            <DataTableRow className="nk-tb-col-tools">
                              <ul className="nk-tb-actions gx-1 my-n1">
                                <li className="me-n1">
                                  <UncontrolledDropdown>
                                    <DropdownToggle
                                      tag="a"
                                      href="#toggle"
                                      onClick={(ev) => ev.preventDefault()}
                                      className="dropdown-toggle btn btn-icon btn-trigger"
                                    >
                                      <Icon name="more-h"></Icon>
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                      <ul className="link-list-opt no-bdr">
                                        <li>
                                          <DropdownItem tag="a" href="#edit" onClick={(ev) => ev.preventDefault()}>
                                            <Icon name="edit"></Icon>
                                            <span>Edit Selected</span>
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem
                                            tag="a"
                                            href="#remove"

                                          >
                                            <Icon name="trash"></Icon>
                                            <span>Remove Selected</span>
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem tag="a" href="#stock" onClick={(ev) => ev.preventDefault()}>
                                            <Icon name="bar-c"></Icon>
                                            <span>Update Stock</span>
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem tag="a" href="#price" onClick={(ev) => ev.preventDefault()}>
                                            <Icon name="invest"></Icon>
                                            <span>Update Price</span>
                                          </DropdownItem>
                                        </li>
                                      </ul>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </li>
                              </ul>
                            </DataTableRow>
                          </DataTableHead>
                          {currentItems.length > 0
                            ? currentItems.map((item) => {

                              return (
                                <DataTableItem key={item.id}>
                                  <DataTableRow className="nk-tb-col-check">
                                    <div className="custom-control custom-control-sm custom-checkbox notext">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        defaultChecked={item.check}
                                        id={item.id + "uid1"}
                                        key={Math.random()}

                                      />
                                      <label className="custom-control-label" htmlFor={item.id + "uid1"}></label>
                                    </div>
                                  </DataTableRow>
                                  <DataTableRow>

                                    <span className="tb-product" style={{ flexDirection: "column", display: "flex", alignItems: "start" }}>

                                      <span className="title">{item.date}</span>

                                    </span>

                                  </DataTableRow>

                                  <DataTableRow size="md">
                                    <span className="badge bg-outline-secondary">{item.type}</span>
                                  </DataTableRow>
                                  <DataTableRow>
                                    <span className="tb-sub">{item.notice}</span>
                                  </DataTableRow>
                                  <DataTableRow size="md">
                                    <img style={{ borderRadius: "50%", width: "25px" }} src={ProductH} alt="product" className="thumb" />
                                    <span style={{ paddingLeft: "5px" }} className="tb-sub">{item.representative.name}</span>
                                  </DataTableRow>
                                  <DataTableRow className="nk-tb-col-tools">
                                    <ul className="nk-tb-actions gx-1 my-n1">
                                      <li className="me-n1">
                                        <UncontrolledDropdown>
                                          <DropdownToggle
                                            tag="a"
                                            href="#more"
                                            onClick={(ev) => ev.preventDefault()}
                                            className="dropdown-toggle btn btn-icon btn-trigger"
                                          >
                                            <Icon name="more-h"></Icon>
                                          </DropdownToggle>
                                          <DropdownMenu end>
                                            <ul className="link-list-opt no-bdr">
                                              <li>
                                                <DropdownItem
                                                  tag="a"
                                                  href="#edit"

                                                >
                                                  <Icon name="edit"></Icon>
                                                  <span>Görüşmeyi Düzenle</span>
                                                </DropdownItem>
                                              </li>
                                              <li>
                                                <DropdownItem
                                                  tag="a"
                                                  href="#view"

                                                >
                                                  <Icon name="eye"></Icon>
                                                  <span>Görüşmeyi Görüntüle</span>
                                                </DropdownItem>
                                              </li>
                                              <li>
                                                <DropdownItem
                                                  tag="a"
                                                  href="#remove"

                                                >
                                                  <Icon name="trash"></Icon>
                                                  <span>Görüşmeyi Sil</span>
                                                </DropdownItem>
                                              </li>
                                            </ul>
                                          </DropdownMenu>
                                        </UncontrolledDropdown>
                                      </li>
                                    </ul>
                                  </DataTableRow>




                                </DataTableItem>
                              );
                            })
                            : null}
                        </DataTableBody>
                      </div>
                    </div>

                  </div>




                </div>
              </div>
            </div>

          </Block>
          <AddMeetModal modal={modal.add} closeModal={closeModal} />
        </Content>

      )}
    </>
  );
};
export default UserDetailsPage;

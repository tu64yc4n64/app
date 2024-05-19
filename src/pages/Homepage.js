import React, { useState, useEffect } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import ProductH from "../images/avatar/a-sm.jpg"
import SimpleBar from "simplebar-react";
import { useForm } from "react-hook-form";
import { RSelect } from "../components/Component";
import { productData, categoryOptions } from "./pre-built/products/ProductData";
import { Card, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { Modal, ModalBody } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Col,
  BlockBetween,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableItem,
  Row,
  PaginationComponent,

} from "../components/Component";

const Homepage = () => {
  const [data, setData] = useState(productData);
  const [sm, updateSm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    img: null,
    sku: "",
    price: 0,
    salePrice: 0,
    stock: 0,
    category: [],
    fav: false,
    check: false,
  });
  const [editId, setEditedId] = useState();
  const [view, setView] = useState({
    edit: false,
    add: false,
    details: false,
  });
  const [onSearchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(7);
  const [files, setFiles] = useState([]);

  //scroll off when sidebar shows
  useEffect(() => {
    view.add ? document.body.classList.add("toggle-shown") : document.body.classList.remove("toggle-shown");
  }, [view.add])

  // Changing state value when searching name
  useEffect(() => {
    if (onSearchText !== "") {
      const filteredObject = productData.filter((item) => {
        return item.sku.toLowerCase().includes(onSearchText.toLowerCase());
      });
      setData([...filteredObject]);
    } else {
      setData([...productData]);
    }
  }, [onSearchText]);

  // function to close the form modal
  const onFormCancel = () => {
    setView({ edit: false, add: false, details: false });
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      img: null,
      sku: "",
      price: 0,
      salePrice: 0,
      stock: 0,
      category: [],
      fav: false,
      check: false,
    });
    reset({});
  };

  const onFormSubmit = (form) => {
    const { title, price, salePrice, sku, stock } = form;

    let submittedData = {
      id: data.length + 1,
      name: title,
      img: files.length > 0 ? files[0].preview : ProductH,
      sku: sku,
      price: price,
      salePrice: salePrice,
      stock: stock,
      category: formData.category,
      fav: false,
      check: false,
    };
    setData([submittedData, ...data]);
    setView({ open: false });
    setFiles([]);
    resetForm();
  };

  const onEditSubmit = () => {
    let submittedData;
    let newItems = data;
    let index = newItems.findIndex((item) => item.id === editId);

    newItems.forEach((item) => {
      if (item.id === editId) {
        submittedData = {
          id: editId,
          name: formData.name,
          img: files.length > 0 ? files[0].preview : item.img,
          sku: formData.sku,
          price: formData.price,
          salePrice: formData.salePrice,
          stock: formData.stock,
          category: formData.category,
          fav: false,
          check: false,
        };
      }
    });
    newItems[index] = submittedData;
    //setData(newItems);
    resetForm();
    setView({ edit: false, add: false });
  };

  // function that loads the want to editted data
  const onEditClick = (id) => {
    data.forEach((item) => {
      if (item.id === id) {
        setFormData({
          name: item.name,
          img: item.img,
          sku: item.sku,
          price: item.price,
          salePrice: item.salePrice,
          stock: item.stock,
          category: item.category,
          fav: false,
          check: false,
        });
      }
    });
    setEditedId(id);
    setFiles([]);
    setView({ add: false, edit: true });
  };

  useEffect(() => {
    reset(formData)
  }, [formData]);

  // selects all the products
  const selectorCheck = (e) => {
    let newData;
    newData = data.map((item) => {
      item.check = e.currentTarget.checked;
      return item;
    });
    setData([...newData]);
  };

  // selects one product
  const onSelectChange = (e, id) => {
    let newData = data;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].check = e.currentTarget.checked;
    setData([...newData]);
  };

  // onChange function for searching name
  const onFilterChange = (e) => {
    setSearchText(e.target.value);
  };

  // function to delete a product
  const deleteProduct = (id) => {
    let defaultData = data;
    defaultData = defaultData.filter((item) => item.id !== id);
    setData([...defaultData]);
  };

  // function to delete the seletected item
  const selectorDeleteProduct = () => {
    let newData;
    newData = data.filter((item) => item.check !== true);
    setData([...newData]);
  };

  // toggle function to view product details
  const toggle = (type) => {
    setView({
      edit: type === "edit" ? true : false,
      add: type === "add" ? true : false,
      details: type === "details" ? true : false,
    });
  };

  // handles ondrop function of dropzone
  const handleDropChange = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  return (
    <>
      <Head title="Homepage"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle>Kişiler</BlockTitle>
              <div className="nk-block-des text-soft"><p>Toplam 450 kişi</p></div>
              <div className="form-control-wrap" style={{ marginTop: "15px" }}>
                <div className="form-icon form-icon-left">
                  <Icon name="search"></Icon>
                </div>
                <input
                  type="text"
                  className="form-round form-control"
                  id="default-03"
                  placeholder="Kişilerder ara..."
                />
              </div>
            </BlockHeadContent>
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
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">


                    <li className="nk-block-tools-opt">
                      <Button
                        className="toggle btn-icon d-md-none"
                        color="primary"
                        onClick={() => {
                          toggle("add");
                        }}
                      >
                        <Icon name="plus"></Icon>
                      </Button>
                      <Button
                        className="toggle d-none d-md-inline-flex"
                        color="primary"
                        onClick={() => {
                          toggle("add");
                        }}
                      >

                        <span>Yeni Kişi Ekle</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Card className="card-bordered">
            <div className="card-inner-group">
              <div className="card-inner p-0">
                <DataTableBody>
                  <DataTableHead>
                    <DataTableRow className="nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="uid_1"
                          onChange={(e) => selectorCheck(e)}
                        />
                        <label className="custom-control-label" htmlFor="uid_1"></label>
                      </div>
                    </DataTableRow>
                    <DataTableRow size="sm">
                      <span>Müşteri</span>
                    </DataTableRow>
                    <DataTableRow>
                      <span>Telefon</span>
                    </DataTableRow>
                    <DataTableRow>
                      <span>Kategori</span>
                    </DataTableRow>
                    <DataTableRow>
                      <span>Etiket</span>
                    </DataTableRow>
                    <DataTableRow size="md">
                      <span>Şehir</span>
                    </DataTableRow>
                    <DataTableRow size="md">
                      <span>Temsilci</span>
                    </DataTableRow>
                    <DataTableRow size="md">
                      <span>Durum</span>
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
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                      selectorDeleteProduct();
                                    }}
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
                                onChange={(e) => onSelectChange(e, item.id)}
                              />
                              <label className="custom-control-label" htmlFor={item.id + "uid1"}></label>
                            </div>
                          </DataTableRow>
                          <DataTableRow size="sm">
                            <span className="tb-product" style={{ flexDirection: "column", display: "flex", alignItems: "start" }}>

                              <span className="title">{item.name}</span>
                              <span>{item.email}</span>
                            </span>
                          </DataTableRow>
                          <DataTableRow>
                            <span className="tb-sub">{item.phone}</span>
                          </DataTableRow>
                          <DataTableRow>
                            <span className="badge bg-outline-secondary">{item.category}</span>
                          </DataTableRow>
                          <DataTableRow>
                            <span className="badge bg-outline-secondary">{item.ticket}</span>
                          </DataTableRow>
                          <DataTableRow>
                            <span className="tb-sub">{item.city}</span>
                          </DataTableRow>
                          <DataTableRow>
                            <img style={{ borderRadius: "50%", width: "25px" }} src={ProductH} alt="product" className="thumb" />
                            <span style={{ paddingLeft: "5px" }} className="tb-sub">{item.representative.name}</span>
                          </DataTableRow>
                          <DataTableRow>
                            <span className="badge bg-outline-secondary">{item.status}</span>
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
                                          onClick={(ev) => {
                                            ev.preventDefault();
                                            onEditClick(item.id);
                                            toggle("edit");
                                          }}
                                        >
                                          <Icon name="edit"></Icon>
                                          <span>Edit Product</span>
                                        </DropdownItem>
                                      </li>
                                      <li>
                                        <DropdownItem
                                          tag="a"
                                          href="#view"
                                          onClick={(ev) => {
                                            ev.preventDefault();
                                            onEditClick(item.id);
                                            toggle("details");
                                          }}
                                        >
                                          <Icon name="eye"></Icon>
                                          <span>View Product</span>
                                        </DropdownItem>
                                      </li>
                                      <li>
                                        <DropdownItem
                                          tag="a"
                                          href="#remove"
                                          onClick={(ev) => {
                                            ev.preventDefault();
                                            deleteProduct(item.id);
                                          }}
                                        >
                                          <Icon name="trash"></Icon>
                                          <span>Remove Product</span>
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
                <div className="card-inner">
                  {data.length > 0 ? (
                    <PaginationComponent
                      itemPerPage={itemPerPage}
                      totalItems={data.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    />
                  ) : (
                    <div className="text-center">
                      <span className="text-silent">No products found</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </Block>
        <Modal className="modal-dialog-centered" size="lg">

        </Modal>

        <Modal className="modal-dialog-centered" size="lg">

        </Modal>

        <SimpleBar
          className={`nk-add-product toggle-slide toggle-slide-right toggle-screen-any ${view.add ? "content-active" : ""
            }`}
        >
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Yeni Kişi Ekle</BlockTitle>
              <BlockDes>
                <p>Müşteri Listenize Yeni Kişi Ekleyin</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Block>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <Row className="g-3">
                <Col size="12">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <RSelect
                        name="category"
                        isMulti



                        placeholder="Firma"
                      //ref={register({ required: "This is required" })}
                      />
                      {errors.category && <span className="invalid">{errors.category.message}</span>}
                    </div>
                  </div>
                </Col>

                <Col size="12">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control"
                        {...register('name', {
                          required: "Lütfen boş bıraklın alanları doldurunuz.",
                        })}
                        placeholder="Email"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </div>
                  </div>
                </Col>
                <BlockDes>
                  <p>Kategorilendirme</p>
                </BlockDes>
                <Col size="6">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <RSelect
                        name="category"
                        isMulti



                        placeholder="Temsilci"
                      //ref={register({ required: "This is required" })}
                      />
                      {errors.category && <span className="invalid">{errors.category.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col size="6">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <RSelect
                        name="category"
                        isMulti



                        placeholder="Kategori"
                      //ref={register({ required: "This is required" })}
                      />
                      {errors.category && <span className="invalid">{errors.category.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col size="6">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <RSelect
                        name="category"
                        isMulti



                        placeholder="Etiket"
                      //ref={register({ required: "This is required" })}
                      />
                      {errors.category && <span className="invalid">{errors.category.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col size="12">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <textarea
                        type="text"
                        className="form-control"
                        {...register('name', {
                          required: "Lütfen boş bıraklın alanları doldurunuz.",
                        })}
                        placeholder="Notlar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </div>
                  </div>
                </Col>
                <BlockDes>
                  <p>Adres Bilgileri</p>
                </BlockDes>
                <Col size="12">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control"
                        {...register('name', {
                          required: "Lütfen boş bıraklın alanları doldurunuz.",
                        })}
                        placeholder="Adres"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col size="6">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <RSelect
                        name="category"
                        isMulti
                        placeholder="Şehir"
                      //ref={register({ required: "This is required" })}
                      />
                      {errors.category && <span className="invalid">{errors.category.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col size="6">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <RSelect
                        name="category"
                        isMulti
                        placeholder="İlçe"
                      //ref={register({ required: "This is required" })}
                      />
                      {errors.category && <span className="invalid">{errors.category.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col size="6">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <RSelect
                        name="category"
                        isMulti
                        placeholder="Ülke"
                      //ref={register({ required: "This is required" })}
                      />
                      {errors.category && <span className="invalid">{errors.category.message}</span>}
                    </div>
                  </div>
                </Col>

                <Col md="6">
                  <div className="form-group">

                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control"
                        {...register('name', {
                          required: "Lütfen boş bıraklın alanları doldurunuz.",
                        })}
                        placeholder="Posta Kodu"

                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </div>
                  </div>
                </Col>




                <Col size="12">
                  <Button color="primary" type="submit">
                    <Icon className="plus"></Icon>
                    <span>Add Product</span>
                  </Button>
                </Col>
              </Row>
            </form>
          </Block>
        </SimpleBar>

        {view.add && <div className="toggle-overlay" onClick={toggle}></div>}
      </Content>
    </>
  );
};
export default Homepage;

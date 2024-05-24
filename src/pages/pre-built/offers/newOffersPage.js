
import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import { Label, Input, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, ButtonGroup, ButtonToolbar } from "reactstrap";
import DatePicker from "react-datepicker";
import {
    Block,
    BlockDes,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    Icon,
    Button,
    BlockBetween,
    PreviewCard,
    OverlineTitle,
    RSelect


} from "../../../components/Component";
import "./style.css"
const NewOffersPage = () => {

    const [startDate, setStartDate] = useState(null);
    const [offer, setOffer] = useState([])
    const [selectedTax, setSelectedTax] = useState(null);
    const [discount, setDiscount] = useState({
        label: "0%",
        value: "0"
    });


    const [newOfferData, setNewOfferData] = useState({
        id: "",
        productName: "",
        comment: "",
        piece: "",
        price: "",
        tax: {},
        amount: "",
    });
    const handleTaxChange = (selectedOption) => {
        setSelectedTax(selectedOption);
    };
    const handleDiscountChange = (selectedOption) => {
        setDiscount(selectedOption);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewOfferData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleAddOffer = () => {

        const newOfferItem = {
            id: offer.length + 1,
            productName: newOfferData.productName,
            comment: newOfferData.comment,
            piece: newOfferData.piece,
            price: newOfferData.price,
            tax: selectedTax,
            amount: newOfferData.amount
        };


        setOffer(prevOffer => [...prevOffer, newOfferItem]);
        setSelectedTax(null)

        setNewOfferData({
            id: "",
            productName: "",
            comment: "",
            piece: "",
            price: "",
            tax: {},
            amount: ""
        });
    };
    const calculateSubtotal = () => {
        let subtotal = 0;
        offer.forEach(item => {

            const totalItemPrice = parseFloat(item.piece) * parseFloat(item.price) * parseFloat(item.tax.value);
            subtotal += totalItemPrice;
        });
        return subtotal.toFixed(2);
    };
    const calculateDiscountSubtotal = () => {
        let discountSubtotal = 0;
        discountSubtotal = calculateSubtotal() * discount.value
        return discountSubtotal.toFixed(2);
    };
    const handleDeleteOffer = (id) => {
        setOffer(offer.filter(item => item.id !== id))
    }
    console.log(offer)

    const taxData = [
        {
            label: "20%",
            value: "1.2"
        },
        {
            label: "15%",
            value: "1.15"
        }
    ];
    const discountData = [
        {
            label: "0%",
            value: "0"
        },
        {
            label: "5%",
            value: "0.05"
        },
        {
            label: "10%",
            value: "0.1"
        },
        {
            label: "15%",
            value: "0.15"
        }
    ];

    return (
        <Content>
            <BlockHead size="sm">
                <BlockBetween>
                    <BlockHeadContent>
                        <BlockTitle>Teklif Oluştur</BlockTitle>
                        <div className="nk-block-des text-soft"><p>Yeni Teklif Oluşturun</p></div>
                    </BlockHeadContent>
                </BlockBetween>
            </BlockHead>
            <Block size="lg">

                <PreviewCard>

                    <Row className="gy-4">
                        <Col lg="6">
                            <Row className="gy-4">
                                <Col sm="12">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input id="default-0" placeholder="Teklif Başlığı" type="text" />
                                        </div>
                                    </div>
                                </Col>

                                <Col md="6">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                className="form-control"
                                                placeholderText="Tarih"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                className="form-control"
                                                placeholderText="Geçerlilik Tarihi"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input id="default-0" placeholder="Kategori" type="text" />
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input id="default-0" placeholder="Etiket" type="text" />
                                        </div>
                                    </div>
                                </Col>



                            </Row>
                        </Col>
                        <Col lg="6">
                            <Row className="gy-4">
                                <Col md="6">
                                    <div className="form-group">

                                        <RSelect placeholder="Durum" />
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="form-group">

                                        <RSelect placeholder="Oluşturan" />
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input id="default-0" placeholder="Kime" type="text" />
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input type="textarea" id="default-0" placeholder="Adres" />
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="form-group">

                                        <RSelect placeholder="Şehir" />
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="form-group">

                                        <RSelect placeholder="İlçe" />
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="form-group">

                                        <RSelect placeholder="Ülke" />
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input type="text" id="default-0" placeholder="Posta Kodu" />
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input type="text" id="default-0" placeholder="Mail" />
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input type="text" id="default-0" placeholder="Telefon" />
                                        </div>
                                    </div>
                                </Col>




                            </Row>
                        </Col>
                        <hr className="preview-hr"></hr>
                        <Col md="6">
                            <Row>
                                <Col>
                                    <div className="form-group">

                                        <RSelect placeholder="Ürünlerden Ekle" />

                                    </div>
                                </Col>
                                <Col>
                                    <button className="btn btn-primary btn-icon"><Icon name="plus"></Icon></button>
                                </Col>


                            </Row>







                        </Col>
                        <div className="bg-lighter py-3 new-offer-create">
                            <Row>

                                <Col md="12">


                                    <Row>
                                        <Col xl="2" lg="6" className="pb-xl-0 pb-3">
                                            <strong className="text-dark">Ürün Adı</strong>
                                            <hr className="d-xl-block d-none"></hr>
                                            <div className="form-group">

                                                <div className="form-control-wrap">
                                                    <textarea name="productName" value={newOfferData.productName} onChange={handleInputChange} style={{ minHeight: "80px" }} id="default-textarea" className="no-resize form-control"
                                                        placeholder="Ürün Adı">
                                                    </textarea>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl="3" lg="6" className="pb-xl-0 pb-3">
                                            <strong className="text-dark">Açıklama</strong>
                                            <hr className="d-xl-block d-none"></hr>
                                            <div className="form-group ">

                                                <div className="form-control-wrap">
                                                    <textarea name="comment" value={newOfferData.comment} onChange={handleInputChange} style={{ minHeight: "80px" }} id="default-textarea" className="no-resize form-control"
                                                        placeholder="Açıklama">
                                                    </textarea>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl="1" lg="6" className="pb-xl-0 pb-3">
                                            <strong className="text-dark">Adet</strong>
                                            <hr className="d-xl-block d-none"></hr>
                                            <div className="form-group">

                                                <div className="form-control-wrap">
                                                    <input name="piece" value={newOfferData.piece} onChange={handleInputChange} id="default-0" placeholder="Adet" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl="2" lg="6" className="pb-xl-0 pb-3">
                                            <strong className="text-dark">Birim Fiyat (Vergi Dahil)</strong>
                                            <hr className="d-xl-block d-none"></hr>
                                            <div className="form-group">

                                                <div className="form-control-wrap">
                                                    <input name="price" value={newOfferData.price} onChange={handleInputChange} id="default-0" placeholder="Tutar" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl="2" lg="6" className="pb-xl-0 pb-3">
                                            <strong className="text-dark">Vergi</strong>
                                            <hr className="d-xl-block d-none"></hr>
                                            <div className="form-group">

                                                <div className="form-control-wrap">
                                                    <RSelect value={selectedTax} options={taxData}
                                                        onChange={(selectedOption) => handleTaxChange(selectedOption)} placeholder="Vergi" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl="1" lg="6" className="pb-xl-0 pb-3">
                                            <strong className="text-dark">Tutar</strong>
                                            <hr className="d-xl-block d-none"></hr>

                                        </Col>
                                        <Col xl="1" lg="6" className="pb-xl-0 pb-3">
                                            <strong className="text-dark"></strong>
                                            <hr className="d-xl-block d-none"></hr>

                                            <button onClick={handleAddOffer} className="btn btn-primary btn-icon d-xl-flex d-none"><Icon name="check"></Icon></button>
                                            <button onClick={handleAddOffer} className="btn btn-primary d-xl-none d-block">Yeni Fatura Ekle</button>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </div>
                        {offer.map((item, i) => (
                            <div key={i} className=" py-3 new-offer-create">
                                <Row>

                                    <Col md="12">


                                        <Row>
                                            <Col xl="2" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark">Ürün Adı</strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <div className="form-group">

                                                    <div className="form-control-wrap">
                                                        <textarea readOnly value={item.productName} name="productName" style={{ minHeight: "80px" }} id="default-textarea" className="no-resize form-control"
                                                            placeholder="Ürün Adı">
                                                        </textarea>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl="3" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark">Açıklama</strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <div className="form-group ">

                                                    <div className="form-control-wrap">
                                                        <textarea readOnly value={item.comment} name="comment" style={{ minHeight: "80px" }} id="default-textarea" className="no-resize form-control"
                                                            placeholder="Açıklama">
                                                        </textarea>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl="1" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark">Adet</strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <div className="form-group">

                                                    <div className="form-control-wrap">
                                                        <input readOnly value={item.piece} name="piece" id="default-0" placeholder="Adet" type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl="2" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark">Birim Fiyat (Vergi Dahil)</strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <div className="form-group">

                                                    <div className="form-control-wrap">
                                                        <input readOnly value={item.price} name="price" id="default-0" placeholder="Tutar" type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl="2" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark">Vergi</strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <div className="form-group">

                                                    <div className="form-control-wrap">
                                                        <input className="form-control" readOnly value={item.tax.label} placeholder="Vergi" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl="1" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark">Tutar</strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <p>{(parseFloat(item.piece) * parseFloat(item.price) * (item.tax.value)).toFixed(2)}₺</p>

                                            </Col>
                                            <Col xl="1" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark"></strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <button onClick={() => handleDeleteOffer(item.id)} className="btn btn-primary btn-icon d-xl-flex d-none"><Icon name="trash-fill"></Icon></button>
                                                <Button onClick={() => handleDeleteOffer(item.id)} className="d-xl-none d-block" color="danger">Faturayı Sil</Button>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                            </div>
                        ))}
                        {offer.length > 0 && (
                            <Row>

                                <Col xl="6" className="d-xl-block d-none">
                                </Col>
                                <Col xl="6" className="mt-0">
                                    <hr className=""></hr>
                                    <div className="d-flex justify-content-xl-end justify-content-between">
                                        <strong className="px-2">
                                            Ara Toplam</strong>
                                        <strong className="px-2">{calculateSubtotal()}₺</strong>
                                    </div>
                                </Col>
                                <Col xl="6" className="d-xl-block d-none">
                                </Col>
                                <Col xl="6" className="mt-0">
                                    <hr className=""></hr>
                                    <div className="d-flex justify-content-xl-end justify-content-between align-items-center">

                                        <div className="form-group mb-0" style={{ width: "105px" }}>

                                            <div className="form-control-wrap">
                                                <RSelect value={discount} options={discountData}
                                                    onChange={(selectedOption) => handleDiscountChange(selectedOption)} placeholder="İndirim" />
                                            </div>
                                        </div>
                                        <strong className="px-2">-{calculateDiscountSubtotal()}₺</strong>
                                    </div>
                                </Col>
                                <Col xl="6" className="d-xl-block d-none">
                                </Col>
                                <Col xl="6" className="mt-0">
                                    <hr className=""></hr>
                                    <div className="d-flex justify-content-xl-end justify-content-between" >
                                        <strong className="px-2">
                                            Toplam</strong>
                                        <strong className="px-2">{(calculateSubtotal() - calculateDiscountSubtotal()).toFixed(2)}₺</strong>
                                    </div>
                                </Col>
                                <Col sm="12" className="mt-0">

                                    <hr className=""></hr>
                                    <div className="d-flex justify-content-xl-end justify-content-between">
                                        <ButtonToolbar className="g-2">
                                            <ButtonGroup>
                                                <Button outline color="secondary">Vazgeç</Button>
                                            </ButtonGroup>
                                            <ButtonGroup>
                                                <Button color="primary">Kaydet</Button>
                                            </ButtonGroup>
                                        </ButtonToolbar>
                                    </div>
                                </Col>

                            </Row>
                        )}

                    </Row>


                </PreviewCard>
            </Block>

        </Content>
    )
}

export default NewOffersPage

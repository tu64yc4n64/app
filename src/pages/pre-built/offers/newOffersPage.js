
import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import { Label, Input, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
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
    const [newOfferData, setNewOfferData] = useState({
        productName: "",
        comment: "",
        piece: "",
        price: "",
        tax: "1.2",
        amount: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewOfferData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleAddOffer = () => {
        // Yeni teklif nesnesini oluştur
        const newOfferItem = {
            productName: newOfferData.productName,
            comment: newOfferData.comment,
            piece: newOfferData.piece,
            price: newOfferData.price,
            tax: newOfferData.tax,
            amount: newOfferData.amount
        };

        // Eski tekliflerin üzerine yeni teklifi ekle
        setOffer(prevOffer => [...prevOffer, newOfferItem]);

        // Yeni teklif verilerini sıfırla
        setNewOfferData({
            productName: "",
            comment: "",
            piece: "",
            price: "",
            tax: "1.2",
            amount: ""
        });
    };

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
                                                    <RSelect placeholder="Vergi" />
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
                                            <button onClick={handleAddOffer} className="btn btn-primary btn-icon"><Icon name="check"></Icon></button>
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
                                                        <textarea name="productName" value={item.productName} onChange={handleInputChange} style={{ minHeight: "80px" }} id="default-textarea" className="no-resize form-control"
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
                                                        <textarea name="comment" value={item.comment} onChange={handleInputChange} style={{ minHeight: "80px" }} id="default-textarea" className="no-resize form-control"
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
                                                        <input name="piece" value={item.piece} onChange={handleInputChange} id="default-0" placeholder="Adet" type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl="2" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark">Birim Fiyat (Vergi Dahil)</strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <div className="form-group">

                                                    <div className="form-control-wrap">
                                                        <input name="price" value={item.price} onChange={handleInputChange} id="default-0" placeholder="Tutar" type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl="2" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark">Vergi</strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <div className="form-group">

                                                    <div className="form-control-wrap">
                                                        <RSelect placeholder="Vergi" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl="1" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark">Tutar</strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <p>{(parseFloat(item.piece) * parseFloat(item.price) * parseFloat(item.tax)).toFixed(2)}₺</p>

                                            </Col>
                                            <Col xl="1" lg="6" className="pb-xl-0 pb-3">
                                                <strong className="text-dark"></strong>
                                                <hr className="d-xl-block d-none"></hr>
                                                <button className="btn btn-primary btn-icon"><Icon name="trash-fill"></Icon></button>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                            </div>
                        ))}


                    </Row>


                </PreviewCard>
            </Block>

        </Content>
    )
}

export default NewOffersPage

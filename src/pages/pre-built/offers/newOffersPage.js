
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
    const [newOfferData, setNewOfferDatatDate] = useState([{
        productName: "",
        comment: "",
        piece: "",
        price: "",
        tax: "0.2",
        amount: "",
    }]);


    console.log(newOfferData)
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
                        <div className="bg-lighter p-3 new-offer-create">
                            <Col md="12">


                                <Row>
                                    <Col xl="2" lg="6" className="pb-xl-0 pb-3">
                                        <strong className="text-dark">Ürün Adı</strong>
                                        <hr className="d-xl-block d-none"></hr>
                                        <div className="form-group">

                                            <div className="form-control-wrap">
                                                <textarea onChange={(e) => setNewOfferDatatDate({ productName: e.target.value })} style={{ minHeight: "80px" }} id="default-textarea" className="no-resize form-control"
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
                                                <textarea onChange={(e) => setNewOfferDatatDate({ comment: e.target.value })} style={{ minHeight: "80px" }} id="default-textarea" className="no-resize form-control"
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
                                                <input onChange={(e) => setNewOfferDatatDate({ piece: e.target.value })} id="default-0" placeholder="Adet" type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl="2" lg="6" className="pb-xl-0 pb-3">
                                        <strong className="text-dark">Birim Fiyat (Vergi Dahil)</strong>
                                        <hr className="d-xl-block d-none"></hr>
                                        <div className="form-group">

                                            <div className="form-control-wrap">
                                                <input onChange={(e) => setNewOfferDatatDate({ price: e.target.value })} id="default-0" placeholder="Tutar" type="text" className="form-control" />
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
                                        <button className="btn btn-primary btn-icon"><Icon name="check"></Icon></button>
                                    </Col>
                                </Row>

                            </Col>
                        </div>
                    </Row>


                </PreviewCard>
            </Block>

        </Content>
    )
}

export default NewOffersPage

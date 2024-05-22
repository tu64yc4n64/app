
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
const NewOffersPage = () => {

    const [startDate, setStartDate] = useState(null);
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

                                <Col sm="6">
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
                                <Col sm="6">
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
                                <Col sm="6">
                                    <div className="form-group">

                                        <RSelect placeholder="Durum" />
                                    </div>
                                </Col>
                                <Col sm="6">
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
                                <Col sm="6">
                                    <div className="form-group">

                                        <RSelect placeholder="Şehir" />
                                    </div>
                                </Col>
                                <Col sm="6">
                                    <div className="form-group">

                                        <RSelect placeholder="İlçe" />
                                    </div>
                                </Col>
                                <Col sm="6">
                                    <div className="form-group">

                                        <RSelect placeholder="Ülke" />
                                    </div>
                                </Col>
                                <Col sm="6">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input type="text" id="default-0" placeholder="Posta Kodu" />
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="6">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input type="text" id="default-0" placeholder="Mail" />
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="6">
                                    <div className="form-group">

                                        <div className="form-control-wrap">
                                            <Input type="text" id="default-0" placeholder="Telefon" />
                                        </div>
                                    </div>
                                </Col>




                            </Row>
                        </Col>
                        <hr class="preview-hr"></hr>
                        <Col lg="6">
                        </Col>

                    </Row>


                </PreviewCard>
            </Block>

        </Content>
    )
}

export default NewOffersPage

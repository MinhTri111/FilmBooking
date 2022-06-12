import React from "react";
import './cornandwater.css'
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";
function CornAndWater() {
    return (
      <>
        <div className="content">
            <Col md="9">
              <Card className="card-plain">
                <CardHeader>
                 <h1>Đồ uống</h1>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        {/* <th>Số thứ tự</th> */}
                        <th>Sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Số lượng</th>
                         
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {/* <td>1</td> */}
                        <td>Cocacola</td>
                        <td>25.000</td>
                        <td>
                        <input className="minus is-form" type="button" value="-"/>
                        <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1"/>                        
                        <input className="plus is-form" type="button" value="+"/>
                        </td>
                        
                      </tr>
                      <tr> 
                      {/* <td>2</td> */}
                        <td>Bắp</td>
                        <td>20.000</td>
                        <td>
                        <input className="minus is-form" type="button" value="-"/>
                        <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1"/>                        
                        <input className="plus is-form" type="button" value="+"/>
                        </td>
                        
                      </tr>
                      <tr>
                      {/* <td>3</td> */}
                        <td>Combo 1 bắp + 2 nước</td>
                        <td>60.000</td>
                        <td>
                        <input className="minus is-form" type="button" value="-"/>
                        <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1"/>                        
                        <input className="plus is-form" type="button" value="+"/>
                        </td>
                        
                      </tr>
                      <tr>
                      {/* <td>4</td> */}
                        <td>Combo 2 bắp + 2 nước</td>
                        <td>80.000</td>
                        <td>
                        <input className="minus is-form" type="button" value="-"/>
                        <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1"/>                        
                        <input className="plus is-form" type="button" value="+"/>
                        </td>
                        
                      </tr>
                      
                      
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          
        </div>
        </>
    );
  }


export default CornAndWater;
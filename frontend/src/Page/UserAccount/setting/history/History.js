import React from "react";
import "./history.scss";
const History = () => {
  return (
    <div className="content">
      <table id="customer">
        <thead>
          <tr>
            <th>Tên phim</th>
            <th>Ngày đặt</th>
            <th>Giá vé</th>
            <th>Rạp</th>
            <th>Bắp</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
export default History;

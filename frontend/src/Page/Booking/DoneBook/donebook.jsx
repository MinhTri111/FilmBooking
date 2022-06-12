import React from 'react';
import QRCode from 'qrcode.react';
import './donebook.css'
function DoneBook() {
  return (
    <div>
      <header className='doneBook'>
          <p>Chúc mừng bạn đã đặt vé thành công</p>
          <p>Vui lòng đưa mã QR Code này cho nhân viên bán vé để kiểm tra thông tin</p>
        <div>
          <QRCode
            id='qrcode'
            value=''
            size={290}
            level={'H'}
            includeMargin={true}
          />
        </div>
      </header>
      <div className='detail-user'>
            <h4>Thông tin vé được gửi về</h4>
            <p>Email: bac@gmail.com</p>
            <p>Số điện thoại:021548455</p>
            <p>Tên phim:aaaaa</p>
            <p>Suất chiếu:</p>
            <p>Rạp số:</p>
      </div>
    </div>
  );
}

export default DoneBook;
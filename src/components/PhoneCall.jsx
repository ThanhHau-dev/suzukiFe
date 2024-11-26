
import React from 'react';

function PhoneCall() {
  const phoneNumber = '0964 060 153'; // Số điện thoại cố định

  return (
    <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
  );
}

export default PhoneCall;

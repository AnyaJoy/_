import React from 'react';
import Image from 'next/image';
import me from '../../public/assets/me-2.png';

function Notification({
  message,
  number,
}: {
  message: string;
  number: number;
}) {
  return (
    <>
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-3 ">
          <Image src={me} alt="me" className="chat-img" />
        </div>
        <div className="col-span-9">
          <div className="font-semibold">Anya</div>
          <div>{message[number]}</div>
        </div>
      </div>
    </>
  );
}

export default Notification
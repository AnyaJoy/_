import React, { useEffect, useState } from 'react'
import '../../styles/skills.scss'
import Image from 'next/image';
import Divider from '../divider';
import { toast } from 'react-toastify';
import Notification from '../notification';
import { message, skills } from '@/app/content/skills';

function Skills() {
  const [messageNumber, setMessageNumber] = useState(0)

  const incrementMessage = () => {
    if (messageNumber < 3) {
      setMessageNumber(prevState => prevState + 1)
    }
  }

  const notify = () => toast(<Notification message={message} number={messageNumber}/>, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  useEffect(() => {
    if (messageNumber !== 0 && message[messageNumber]) notify();
  }, [messageNumber])


  return (
    <>
      <span id='skills'></span>
      <Divider header="Skills" />
      <section className="skills-container w-9/12 sm:w-7/12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 mt-8">
          {skills.map((s) => (
            <div
              key={""}
              class="card 1 col-span-1 w-28 h-28 sm:w-40 sm:h-40 lg:w-36 lg:h-36 xl:w-44 xl:h-44 justify-self-center"
              onClick={incrementMessage}
            >
              <div class="card_image">
                {" "}
                <Image src={s.img} alt={s.name} />{" "}
              </div>
              <p className="text-center">{s.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills
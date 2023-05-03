import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Image from "next/image";
import Icon from "@components/basic/icon";

export default function Contact() {
  const arrow = "/images/arrow.png";
  const [contactOpen, setContactOpen] = useState(true);
  return (
    <div className="contact" aria-expanded={contactOpen}>
      <div className="contact-bg">
        <div
          className="contact-button text-white"
          onClick={() => {
            setContactOpen(!contactOpen);
          }}
        >
          <Image
            className="arrow"
            src={arrow}
            alt="arrow"
            width={32}
            height={32}
          />
        </div>
        <div className="mx-1 flex flex-col">
          <p>Contact Us!</p>
        </div>
        <div className="icon">
          <a
            href="https://open.kakao.com/o/g2IECVff"
            target="_blank"
            rel="noreferrer"
            className="flex w-full"
          >
            <div className="w-fit">
              <Image src="/icon/kakao.png" alt="kakao" width={22} height={22} />
            </div>
          </a>
        </div>
        <div className="icon">
          <a
            href="https://twitter.com/with_OASIS"
            target="_blank"
            rel="noreferrer"
            className="w-[1.2rem]"
          >
            <FontAwesomeIcon className="socialIcon" icon={faTwitter} />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://t.me/OASISYOB"
            target="_blank"
            rel="noreferrer"
            className="w-[1.1rem]"
          >
            <FontAwesomeIcon className="socialIcon" icon={faTelegram} />
          </a>
        </div>
        {/*
        <div className="icon">
          <a href="https://discord.gg/6r44wVKYjb" target='_blank' className="w-[1.35rem]"><FontAwesomeIcon className="socialIcon" icon={faDiscord} /></a>
        </div>
        */}
      </div>
    </div>
  );
}

import Image from "next/image";
import { useState } from "react";

type Props = {
  data: {
    className: string;
    data: {
      id: string;
      title: string;
      content: string;
    }[];
  }[];
};

function FAQ({ data }: Props) {
  const arrow = "/static/images/arrow.png";
  const faq = data;
  const [menu, setMenu] = useState("common");
  function activateMenu(newMenu: string) {
    setMenu(newMenu);
  }
  let contentsID: { [key: string]: boolean } = {};
  faq.map((group, index_group) => {
    group.data.map((content, index_content) => {
      contentsID[content.id] = false;
    });
  });
  const [contentID, setContentID] = useState(contentsID);
  function activateContent(newContentID: string) {
    setContentID((prev) => {
      let current = { ...prev };
      current[newContentID] = !current[newContentID];
      return current;
    });
  }
  return (
    <div className="faq py-16">
      <div className="text-center">
        <p className="title-1">FAQ</p>
      </div>
      <div className="mt-12 lg:mx-12">
        <div className="flex title-small font-medium">
          <div
            onClick={() => {
              activateMenu("common");
            }}
            className={"nav-item " + (menu === "common" ? "active" : "")}
          >
            <p> 일반 </p>
          </div>
          <div
            onClick={() => {
              activateMenu("user");
            }}
            className={"nav-item " + (menu === "user" ? "active" : "")}
          >
            <p> 사용자 </p>
          </div>
          <div
            onClick={() => {
              activateMenu("point");
            }}
            className={"nav-item " + (menu === "point" ? "active" : "")}
          >
            <p> 포인트 </p>
          </div>
        </div>
        {faq.map((group, index_group) => (
          <div
            key={index_group}
            className={
              "mt-3 " +
              group.className +
              (menu === group.className ? "" : " hidden")
            }
          >
            {group.data.map((content, index_content) => (
              <div
                className="row-item "
                key={index_content}
                onClick={() => {
                  activateContent(content.id);
                }}
                aria-expanded={contentID[content.id]}
              >
                <div className={"title flex justify-between px-4"}>
                  <div className="flex flex-col justify-center">
                    <div className="text-xs sm:text-sm lg:text-base font-normal text-white mb-0">
                      {content.title}
                    </div>
                  </div>
                  <Image
                    className="p-2 w-fit"
                    src={arrow}
                    alt="arrow"
                    width={100}
                    height={100}
                  />
                </div>
                <div id={content.id} className="collapse-content">
                  <div className="content">
                    <div
                      className="p-4 text-gray-200"
                      dangerouslySetInnerHTML={{ __html: content.content }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default FAQ;

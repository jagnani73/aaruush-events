import React, { useContext } from "react";
import { FaMagic, FaInfoCircle } from "react-icons/fa";

import { Item } from "../EventRow";
import { ModalContext } from "../../../../context/Modal";

const EventJumbotron = (props: Item) => {
  const modalContext = useContext(ModalContext);

  const eventClickhandler = () => {
    modalContext.setModalImg(props.poster);
    modalContext.setModalTitle(props.name);
    modalContext.setModalTags(props.tags);
    modalContext.setModalDesc(props.description);
    modalContext.setIsOpen(!modalContext.isOpen);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-3/5 my-auto">
        <figure>
          {props.poster && (
            <img src={props.poster[0]} alt="Kitten" width="100%" />
          )}
        </figure>
      </div>
      <div className="flex flex-wrap w-full lg:w-2/5 my-auto lg:px-10 lg:text-center">
        <div className="w-full mt-5 lg:mt-auto">
          <h4 className="text-xl font-bold">{props.name}</h4>
          <p className="text-base my-2">{props.description}</p>
        </div>
        <div className="flex flex-wrap w-full mt-6">
          <button
            className="flex w-5/12 h-10 rounded-lg m-auto bg-baseWhite text-baseBlack focus:outline-none"
            onClick={eventClickhandler}
          >
            <FaMagic className="m-auto text-lg" />
          </button>
          <button className="flex w-5/12 h-10 rounded-lg m-auto bg-baseBlack text-baseWhite focus:outline-none">
            <FaInfoCircle className="m-auto text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventJumbotron;

import { useState } from "react";

export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((state) => !state);
  };
  return {
    showModal,
    setShowModal,
    toggleModal,
  };
}

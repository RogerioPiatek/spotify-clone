"use client";

import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  //Used to verify if page is already loaded, if not returns null
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        title="Test Modal"
        description="Test Description"
        isOpen
        onChange={() => {}}
      >
        Test Children
      </Modal>
    </>
  );
};

export default ModalProvider;

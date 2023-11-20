"use client";

import { Field, FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useUploadModal from "@/hooks/useUploadModal";

import Modal from "./Modal";

const UploadModal = () => {
  const { isOpen, onClose } = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    //Upload to supabase
  };

  return (
    <Modal
      title="Add a song"
      description="Upload an MP3 file"
      isOpen={isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </Modal>
  );
};

export default UploadModal;

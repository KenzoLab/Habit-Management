import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import Modal from "@mui/material/Modal";
import { IoCloseOutline } from "react-icons/io5";

import { useGroups } from "../../providers/Groups";

import {
  ContainerModal,
  ContForm,
  ContInput,
  Head,
  ButtonSub,
  BtnCloseDelete,
} from "./styles";
import Input from "../../components/Input";

const ModalProfile = ({ open, handle }) => {
  //PROPS PROVIDER

  //SCHEMA YUP VALIDATION
  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    email: yup.string().email("Invalid email").required("Required field"),
  });

  // HOOK FORM
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // SAVE INFO
  const onSaveInfo = (data) => {};

  // RESET INPUTS
  // const resetInputs = () => {
  //   reset({
  //     title: "",
  //     category: { value: "", label: "Select an option" },
  //     description: "",
  //   });
  // };

  //CLOSE MODAL AND RESET INPUTS
  const CloseModal = () => {
    // resetInputs();
    handle();
  };

  //USE EFFECT
  useEffect(() => {
    // searchSubscriptionsFunction();
    // listGroupsFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => CloseModal()}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <ContainerModal>
          <Head>
            <h3>Edit info User</h3>
            <BtnCloseDelete onClick={() => CloseModal()}>
              <IoCloseOutline />
            </BtnCloseDelete>
          </Head>
          <ContForm onSubmit={handleSubmit(onSaveInfo)}>
            <ContInput>
              <Input
                label="Username:"
                errors={errors.username ? errors.username.message : " "}
                register={register}
                data="username"
                placeholder="Enter a new username"
              />
            </ContInput>
            <ContInput>
              <Input
                label="Email:"
                errors={errors.email ? errors.email.message : " "}
                register={register}
                data="email"
                placeholder="Enter a new email"
              />
            </ContInput>

            <ButtonSub type="submit">Save</ButtonSub>
          </ContForm>
        </ContainerModal>
      </Modal>
    </div>
  );
};

export default ModalProfile;

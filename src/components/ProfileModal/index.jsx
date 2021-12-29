import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import Modal from "@mui/material/Modal";
import { IoCloseOutline } from "react-icons/io5";

import { useAuth } from "../../providers/AuthProvider";
import { useSignUp } from "../../providers/SignUp";

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
  const { userId, userInfo, getUserInfo } = useAuth();
  const { patchUpdateUser } = useSignUp();

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
  const onSaveInfo = (data) => {
    patchUpdateUser(userId, data);
    // CloseModal();
  };

  //CLOSE MODAL AND RESET INPUTS
  const CloseModal = () => {
    onLoadInfo();
    // resetInputs();
    handle();
  };

  // RESET INPUTS
  const resetInputs = () => {
    reset({
      username: userInfo.username,
      email: userInfo.email,
    });
  };

  //LOAD INFO USER
  const onLoadInfo = () => {
    getUserInfo(userId);
  };

  //USE EFFECT
  useEffect(() => {
    onLoadInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    resetInputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

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
                defaultValue={userInfo.username}
              />
            </ContInput>
            <ContInput>
              <Input
                label="Email:"
                errors={errors.email ? errors.email.message : " "}
                register={register}
                data="email"
                placeholder="Enter a new email"
                defaultValue={userInfo.email}
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

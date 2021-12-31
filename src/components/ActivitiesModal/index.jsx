import Modal from "@mui/material/Modal";
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useActivities } from "../../providers/Activities";

import {
  ContainerModal,
  ContForm,
  ContActivities,
  ContList,
  ContInput,
  ContItem,
  ContInfosItem,
  Head,
  ButtonSub,
  BtnCloseDelete,
} from "./styles";
import Input from "../../components/Input";

const ModalActivities = ({ open, handle, idGroup }) => {
  //PROPS PROVIDER
  const { activities, loadActivities } = useActivities();
  const { addActivity, deleteActivity } = useActivities();

  //SCHEMA YUP VALIDATION
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Título obrigatório!")
      .min(8, "Mínimo de 8 caracteres.")
      .max(30, "Mínimo de 20 caracteres."),
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

  //ADD ACTIVITY
  const onAddActivity = (data) => {
    addActivity(data, idGroup);
    resetInputs();
  };

  // REMOVE ACTIVITY
  const onDeleteActivity = (idGoal) => {
    deleteActivity(idGoal, idGroup);
  };

  // RESET INPUTS
  const resetInputs = () => {
    reset({
      title: "",
    });
  };

  //CLOSE MODAL AND RESET INPUTS
  const CloseModal = () => {
    resetInputs();
    handle();
  };

  //USE EFFECT
  useEffect(() => {
    loadActivities(idGroup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => CloseModal()}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        <ContainerModal onSubmit={handleSubmit(onAddActivity)}>
          <ContActivities>
            <Head>
              <h3>Activities</h3>
            </Head>
            <ContList>
              {activities.map((item, idx) => (
                <ContItem key={idx}>
                  <ContInfosItem>
                    <h4>{`${item.title.substring(0, 15)}...`}</h4>
                  </ContInfosItem>
                  <BtnCloseDelete onClick={() => onDeleteActivity(item.id)}>
                    <IoCloseOutline />
                  </BtnCloseDelete>
                </ContItem>
              ))}
            </ContList>
          </ContActivities>
          <ContForm>
            <Head>
              <BtnCloseDelete onClick={() => CloseModal()}>
                <IoCloseOutline />
              </BtnCloseDelete>
            </Head>
            <h3>Activities</h3>
            <h6>Add Activity</h6>
            <ContInput>
              <Input
                label="Title:"
                errors={errors.title ? errors.title.message : " "}
                register={register}
                data="title"
                placeholder="Enter a title"
              />
            </ContInput>
            <ButtonSub type="submit">Add</ButtonSub>
          </ContForm>
        </ContainerModal>
      </Modal>
    </div>
  );
};

export default ModalActivities;

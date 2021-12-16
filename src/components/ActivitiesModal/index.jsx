import Modal from "@mui/material/Modal";
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ContainerModal,
  ContForm,
  ContHabits,
  ContList,
  ContInput,
  ContItem,
  ContInfosItem,
  Head,
  ButtonSub,
  BtnCloseDelete,
} from "./styles";
import Input from "../../components/Input";

const ModalActivities = ({ open, handle }) => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Título obrigatório!")
      .min(8, "Mínimo de 8 caracteres.")
      .max(30, "Mínimo de 20 caracteres."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onAddHabit = (data) => {
    console.log(data);
    //função da Context API
  };

  const CloseModal = () => {
    reset({
      title: "",
      category: "",
      difficulty: "",
      frequency: "",
    });
    handle();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => CloseModal()}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <ContainerModal onSubmit={handleSubmit(onAddHabit)}>
          <ContHabits>
            <Head>
              <h3>Activities</h3>
            </Head>
            <ContList>
              {/* Receber habits e fazer um map */}
              <ContItem>
                <ContInfosItem>
                  <h4>Activity</h4>
                </ContInfosItem>
                <BtnCloseDelete>
                  <IoCloseOutline />
                </BtnCloseDelete>
              </ContItem>
            </ContList>
          </ContHabits>
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

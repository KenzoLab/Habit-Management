import Modal from "@mui/material/Modal";
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ContainerModal,
  ContForm,
  ContRight,
  ContCurrent,
  ContHabits,
  ContList,
  ContInput,
  ContItem,
  ContInfosItem,
  ContTitlesItem,
  Head,
  ButtonSub,
  BtnCloseDelete,
} from "./styles";
import Input from "../../components/Input";
import { InputSelect } from "../../components/Input";

const ModalGoals = ({ open, handle }) => {
  const arrDifficulty = [
    { value: "Easy", label: "Easy" },
    { value: "Medium", label: "Medium" },
    { value: "Hard", label: "Hard" },
  ];

  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Título obrigatório!")
      .min(8, "Mínimo de 8 caracteres.")
      .max(30, "Mínimo de 20 caracteres."),
    difficulty: yup.object().shape({
      label: yup.string().required("Selecione uma dificuldade!"),
      value: yup.string().required("Selecione uma dificuldade!"),
    }),
  });

  const {
    register,
    handleSubmit,
    control,
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
      difficulty: { value: "", label: "Select an option" },
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
              <h3>Goals</h3>
            </Head>
            <ContList>
              {/* Receber habits e fazer um map */}
              <ContItem>
                <ContInfosItem>
                  <h4>Goal Title...</h4>
                  <ContTitlesItem>
                    <h5></h5>
                    <h6>Hard</h6>
                  </ContTitlesItem>
                  <p></p>
                </ContInfosItem>
                <BtnCloseDelete>
                  <IoCloseOutline />
                </BtnCloseDelete>
              </ContItem>
            </ContList>
          </ContHabits>
          <ContRight>
            <ContCurrent>
              <Head>
                <h6>Current</h6>
                <BtnCloseDelete onClick={() => CloseModal()}>
                  <IoCloseOutline />
                </BtnCloseDelete>
              </Head>
              <p>14 goals / 5 concluded</p>
            </ContCurrent>
            <ContForm>
              <Head>
                <h6>Add Goal</h6>
              </Head>
              <ContInput>
                <Input
                  label="Title:"
                  errors={errors.title ? errors.title.message : " "}
                  register={register}
                  data="title"
                  placeholder="Enter a title"
                />
              </ContInput>
              <ContInput>
                <InputSelect
                  label="Choose a difficulty:"
                  name="difficulty"
                  control={control}
                  register={register}
                  data="difficulty"
                  errors={
                    errors?.difficulty?.value
                      ? errors.difficulty.value.message
                      : " "
                  }
                  options={arrDifficulty}
                />
              </ContInput>
              <ButtonSub type="submit">Add</ButtonSub>
            </ContForm>
          </ContRight>
        </ContainerModal>
      </Modal>
    </div>
  );
};

export default ModalGoals;

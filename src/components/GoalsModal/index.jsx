import Modal from "@mui/material/Modal";
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useGoals } from "../../providers/Goals";

import {
  ContainerModal,
  ContForm,
  ContRight,
  ContCurrent,
  ContGoals,
  ContList,
  ContInput,
  ContItem,
  ContInfosItem,
  ContTitlesItem,
  H6,
  Head,
  ButtonSub,
  BtnCloseDelete,
} from "./styles";
import Input from "../../components/Input";
import { InputSelect } from "../../components/Input";

const ModalGoals = ({ open, handle, idGroup }) => {
  //PROPS PROVIDER
  const { goals, loadGoals } = useGoals();
  const { addGoal, deleteGoal } = useGoals();

  //ARRAYS SELECT OPTIONS
  const arrDifficulty = [
    { value: "Easy", label: "Easy" },
    { value: "Medium", label: "Medium" },
    { value: "Hard", label: "Hard" },
  ];

  //SCHEMA YUP VALIDATION
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

  // HOOK FORM
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //ADD GOAL
  const onAddGoal = (data) => {
    addGoal(data, idGroup);
    resetInputs();
  };

  // REMOVE GOAL
  const onDeleteGoal = (idGoal) => {
    deleteGoal(idGoal, idGroup);
  };

  // RESET INPUTS
  const resetInputs = () => {
    reset({
      title: "",
      difficulty: { value: "", label: "Select an option" },
    });
  };

  //CLOSE MODAL AND RESET INPUTS
  const CloseModal = () => {
    resetInputs();
    handle();
  };

  //USE EFFECT
  useEffect(() => {
    loadGoals(idGroup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => CloseModal()}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        <ContainerModal onSubmit={handleSubmit(onAddGoal)}>
          <ContGoals>
            <Head>
              <h3>Goals</h3>
            </Head>
            <ContList>
              {goals.map((item, idx) => (
                <ContItem key={idx}>
                  <ContInfosItem>
                    <h4>{`${item.title.substring(0, 15)}...`}</h4>
                    <ContTitlesItem>
                      <h5></h5>
                      <H6 diff={item.difficulty}>{item.difficulty}</H6>
                    </ContTitlesItem>
                    <p></p>
                  </ContInfosItem>
                  <BtnCloseDelete onClick={() => onDeleteGoal(item.id)}>
                    <IoCloseOutline />
                  </BtnCloseDelete>
                </ContItem>
              ))}
            </ContList>
          </ContGoals>
          <ContRight>
            <ContCurrent>
              <Head>
                <h6>Current</h6>
                <BtnCloseDelete onClick={() => CloseModal()}>
                  <IoCloseOutline />
                </BtnCloseDelete>
              </Head>
              <p>
                {goals.length} goals /{" "}
                {goals.filter((item) => item.achieved === true).length}{" "}
                concluded
              </p>
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

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import Modal from "@mui/material/Modal";
import { IoCloseOutline } from "react-icons/io5";

import { useHabit } from "../../providers/Habits";

import {
  ContainerModal,
  ContForm,
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

const ModalHabits = ({ open, handle }) => {
  //PROPS PROVIDER
  const { listHabits, listHabitsFunction } = useHabit();
  const { createHabitFunction, deleteHabitFunction } = useHabit();

  //ARRAYS SELECT OPTIONS
  const arrFrequency = [
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
  ];
  const arrDifficulty = [
    { value: "Easy", label: "Easy" },
    { value: "Medium", label: "Medium" },
    { value: "Hard", label: "Hard" },
  ];
  const arrCategory = [
    { value: "Financial", label: "Financial" },
    { value: "Health", label: "Health" },
    { value: "Intellectual", label: "Intellectual" },
    { value: "Mindset", label: "Mindset" },
    { value: "Productivity", label: "Productivity" },
    { value: "Relationships", label: "Relationships" },
    { value: "Sports", label: "Sports" },
  ];

  //SCHEMA YUP VALIDATION
  const schema = yup
    .object({
      title: yup
        .string()
        .required("Título obrigatório!")
        .min(8, "Mínimo de 8 caracteres.")
        .max(30, "Mínimo de 20 caracteres."),
      category: yup.object().shape({
        label: yup.string().required("Selecione uma categoria!"),
        value: yup.string().required("Selecione uma categoria!"),
      }),
      difficulty: yup.object().shape({
        label: yup.string().required("Selecione uma dificuldade!"),
        value: yup.string().required("Selecione uma dificuldade!"),
      }),
      frequency: yup.object().shape({
        label: yup.string().required("Selecione uma frequência!"),
        value: yup.string().required("Selecione uma frequência!"),
      }),
    })
    .required();

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

  // ADD HABIT
  const onAddHabit = (data) => {
    createHabitFunction(data);
  };

  //DELETE HABIT
  const onDeleteHabit = (idHabit) => {
    deleteHabitFunction(idHabit);
  };

  //CLOSE MODAL AND RESET INPUTS
  const CloseModal = () => {
    reset({
      title: "",
      category: { value: "", label: "Select an option" },
      difficulty: { value: "", label: "Select an option" },
      frequency: { value: "", label: "Select an option" },
    });
    handle();
  };

  //USE EFFECT
  useEffect(() => {
    listHabitsFunction();
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
          <ContHabits>
            <Head>
              <h3>Habits</h3>
            </Head>
            <ContList>
              {listHabits.length !== 0
                ? listHabits.map((item, idx) => (
                    <ContItem key={idx}>
                      <ContInfosItem>
                        <h4>{`${item.title.substring(0, 15)}...`}</h4>
                        <ContTitlesItem>
                          <h5>{item.category}</h5>
                          <h6>{item.difficulty}</h6>
                        </ContTitlesItem>
                        <p>{item.frequency}</p>
                      </ContInfosItem>
                      <BtnCloseDelete onClick={() => onDeleteHabit(item.id)}>
                        <IoCloseOutline />
                      </BtnCloseDelete>
                    </ContItem>
                  ))
                : "Lista de hábitos vazia!"}
            </ContList>
          </ContHabits>
          <ContForm onSubmit={handleSubmit(onAddHabit)}>
            <Head>
              <h6>Add Habit</h6>
              <BtnCloseDelete onClick={() => CloseModal()}>
                <IoCloseOutline />
              </BtnCloseDelete>
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
                label="Choose a category:"
                name="category"
                control={control}
                register={register}
                data="category"
                errors={
                  errors?.category?.value ? errors.category.value.message : " "
                }
                options={arrCategory}
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
            <ContInput>
              <InputSelect
                label="Choose a frequency:"
                name="frequency"
                control={control}
                register={register}
                data="frequency"
                errors={
                  errors?.frequency?.value
                    ? errors.frequency.value.message
                    : " "
                }
                options={arrFrequency}
              />
            </ContInput>
            <ButtonSub type="submit">Add</ButtonSub>
          </ContForm>
        </ContainerModal>
      </Modal>
    </div>
  );
};

export default ModalHabits;

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
  ContTitlesItem,
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
    category: yup.string().required("Preencha a categoria!"),
    difficulty: yup.string().required("Preencha a dificuldade!"),
    frequency: yup.string().required("Preencha a frequência!"),
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
                  <h4>Habit's Title...</h4>
                  <ContTitlesItem>
                    <h5>Category</h5>
                    <h6>Hard</h6>
                  </ContTitlesItem>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do...
                  </p>
                </ContInfosItem>
                <BtnCloseDelete>
                  <IoCloseOutline />
                </BtnCloseDelete>
              </ContItem>
            </ContList>
          </ContHabits>
          <ContForm>
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
              <Input
                label="Category:"
                errors={errors.category ? errors.category.message : " "}
                register={register}
                data="category"
                placeholder="Enter a category"
              />
            </ContInput>
            <ContInput>
              <Input
                label="Difficulty:"
                errors={errors.difficulty ? errors.difficulty.message : " "}
                register={register}
                data="difficulty"
                placeholder="Enter a difficulty"
              />
            </ContInput>
            <ContInput>
              <Input
                label="Frequency:"
                errors={errors.frequency ? errors.frequency.message : " "}
                register={register}
                data="frequency"
                placeholder="Enter a frequency"
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

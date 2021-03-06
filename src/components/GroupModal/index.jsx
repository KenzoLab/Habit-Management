import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import Modal from "@mui/material/Modal";
import { IoCloseOutline } from "react-icons/io5";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

import { useGroups } from "../../providers/Groups";

import {
  ContainerModal,
  ContForm,
  ContGroups,
  ContList,
  ContInput,
  ContItem,
  ContInfosItem,
  ContTitlesItem,
  ContTextArea,
  Head,
  ButtonSub,
  BtnCloseDelete,
  Paragraph,
} from "./styles";
import Input from "../../components/Input";
import { InputSelect, InputTextArea } from "../../components/Input";

const ModalGroups = ({ open, handle }) => {
  //PROPS PROVIDER
  const { createGroupFunction, searchSubscriptionsFunction } = useGroups();
  const { subscriptions, unsubscribeFunction, listGroupsFunction } =
    useGroups();

  //ARRAYS SELECT OPTIONS
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
        .max(30, "Máximo de 30 caracteres."),
      category: yup.object().shape({
        label: yup.string().required("Selecione uma categoria!"),
        value: yup.string().required("Selecione uma categoria!"),
      }),
      description: yup
        .string()
        .required("Descrição obrigatória!")
        .min(8, "Mínimo de 8 caracteres.")
        .max(180, "Máximo de 180 caracteres."),
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

  // ADD GROUP
  const onAddGroup = (data) => {
    createGroupFunction(data);
    resetInputs();
  };

  // DELETE GROUP
  const onDeleteGroup = (idGroup) => {
    unsubscribeFunction(idGroup);
  };

  // RESET INPUTS
  const resetInputs = () => {
    reset({
      title: "",
      category: { value: "", label: "Select an option" },
      description: "",
    });
  };

  //CLOSE MODAL AND RESET INPUTS
  const CloseModal = () => {
    resetInputs();
    handle();
  };

  //USE EFFECT
  useEffect(() => {
    searchSubscriptionsFunction();
    listGroupsFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => CloseModal()}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        <ContainerModal>
          <ContGroups>
            <Head>
              <h3>Your Groups</h3>
            </Head>
            <ContList>
              {subscriptions.length !== 0
                ? subscriptions.map((item, idx) => (
                    <ContItem key={idx}>
                      <ContInfosItem>
                        <h4>{`${item.name.substring(0, 15)}...`}</h4>
                        <ContTitlesItem>
                          <h5>{item.category}</h5>
                        </ContTitlesItem>
                        <Paragraph>
                          {item.description.includes(" ")
                            ? `${item.description.substring(0, 40)}..`
                            : `${item.description
                                .split("")
                                .map((item, idx) =>
                                  idx === 20 ? `${item} ` : item,
                                )
                                .join("")
                                .substring(0, 40)}...`}
                        </Paragraph>
                      </ContInfosItem>
                      <BtnCloseDelete>
                        <BookmarkRemoveIcon
                          onClick={() => onDeleteGroup(item.id)}
                        />
                      </BtnCloseDelete>
                    </ContItem>
                  ))
                : "Lista de grupos vazia!"}
            </ContList>
          </ContGroups>
          <ContForm onSubmit={handleSubmit(onAddGroup)}>
            <Head>
              <h6>Create Group</h6>
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
                label="Category:"
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
            <ContTextArea>
              <InputTextArea
                label="Description:"
                errors={errors.description ? errors.description.message : " "}
                register={register}
                data="description"
                placeholder="Enter a description"
                rows="5"
                cols="30"
              />
            </ContTextArea>

            <ButtonSub type="submit">Add</ButtonSub>
          </ContForm>
        </ContainerModal>
      </Modal>
    </div>
  );
};

export default ModalGroups;

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { IoCloseOutline } from "react-icons/io5";
import { genConfig } from "react-nice-avatar";

import {
  ContainerModal,
  ContForm,
  ContRandom,
  ContManConfig,
  ContInputs,
  ContInput,
  Head,
  ButtonSub,
  BtnCloseDelete,
  NewAvatar,
  defaultOptions,
} from "./styles";

import { InputSelect } from "../../components/Input";

const ModalAvatar = ({ open, handle }) => {
  const [gender, setGender] = useState();

  //CONFIG AVATAR
  const [myConfig, setMyConfig] = useState({
    sex: "man",
    faceColor: "#F9C9B6",
    earSize: "small",
    eyeStyle: "smile",
    noseStyle: "round",
    mouthStyle: "laugh",
    shirtStyle: "polo",
    glassesStyle: "none",
    hairColor: "#000",
    hairStyle: "thick",
    hatStyle: "none",
    hatColor: "#fff",
    eyeBrowStyle: "up",
    shirtColor: "#F4D150",
    bgColor: "linear-gradient(90deg, #36cd1c 0%, #68deff 100%)",
  });
  const config = genConfig(myConfig);

  //RANDOM ARR BY ONE IDX
  const randomIdx = (arr) => {
    const amount = arr.length;
    const idx = Math.floor(Math.random() * amount);
    return arr[idx];
  };

  //FUNCTION RANDOM SET CONFIG
  const setNewRandomConfig = (obj) => {
    const newConfig = {};
    for (let key in obj) {
      const res = randomIdx(obj[key]);
      if (key === "hairStyleMan") {
        if (newConfig.sex === "man") {
          newConfig.hairStyle = res.value;
        }
      } else if (key === "hairStyleWoman") {
        if (newConfig.sex === "woman") {
          newConfig.hairStyle = res.value;
        }
      } else {
        newConfig[key] = res.value;
      }
    }
    setMyConfig(newConfig);
  };

  //ARRAYS SELECT OPTIONS
  //VIDE IN STYLES FILE

  //SCHEMA YUP VALIDATION
  const schema = yup
    .object({
      sex: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      faceColor: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      earSize: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      eyeStyle: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      noseStyle: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      mouthStyle: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      shirtStyle: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      glassesStyle: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      hairColor: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      hairStyle: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      hatStyle: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      hatColor: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      eyeBrowStyle: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      shirtColor: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
      }),
      bgColor: yup.object().shape({
        label: yup.string().required("Select an option!"),
        value: yup.string().required("Select an option!"),
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

  // SAVE CONFIG
  const onSaveConfig = () => {};

  //GENERATE MANUALLY
  const onGenerateMan = (data) => {
    console.log(data);
    // resetInputs();
  };

  // LOAD CONFIG
  const onLoadConfig = () => {};

  // RESET INPUTS
  const resetInputs = () => {
    reset({
      sex: { value: "", label: "Select an option" },
      faceColor: { value: "", label: "Select an option" },
      earSize: { value: "", label: "Select an option" },
      eyeStyle: { value: "", label: "Select an option" },
      noseStyle: { value: "", label: "Select an option" },
      mouthStyle: { value: "", label: "Select an option" },
      shirtStyle: { value: "", label: "Select an option" },
      glassesStyle: { value: "", label: "Select an option" },
      hairColor: { value: "", label: "Select an option" },
      hairStyle: { value: "", label: "Select an option" },
      hatStyle: { value: "", label: "Select an option" },
      hatColor: { value: "", label: "Select an option" },
      eyeBrowStyle: { value: "", label: "Select an option" },
      shirtColor: { value: "", label: "Select an option" },
      bgColor: { value: "", label: "Select an option" },
    });
  };

  //CLOSE MODAL AND RESET INPUTS
  const CloseModal = () => {
    resetInputs();
    handle();
  };

  //USE EFFECT
  useEffect(() => {
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
            <h3>Edit Avatar</h3>
            <BtnCloseDelete onClick={() => CloseModal()}>
              <IoCloseOutline />
            </BtnCloseDelete>
          </Head>
          <ContForm onSubmit={handleSubmit(onGenerateMan)}>
            <ContManConfig>
              <label>Manually select</label>
              <ContInputs>
                <ContInput>
                  <InputSelect
                    label="Gender:"
                    name="sex"
                    control={control}
                    register={register}
                    data="sex"
                    errors={errors?.sex?.value ? errors.sex.value.message : " "}
                    options={defaultOptions.sex}
                    // onChange={(e) => setGender(e.value)}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Face color:"
                    name="faceColor"
                    control={control}
                    register={register}
                    data="faceColor"
                    errors={
                      errors?.faceColor?.value
                        ? errors.faceColor.value.message
                        : " "
                    }
                    options={defaultOptions.faceColor}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Ear Size:"
                    name="earSize"
                    control={control}
                    register={register}
                    data="earSize"
                    errors={
                      errors?.earSize?.value
                        ? errors.earSize.value.message
                        : " "
                    }
                    options={defaultOptions.earSize}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Nose Style:"
                    name="noseStyle"
                    control={control}
                    register={register}
                    data="noseStyle"
                    errors={
                      errors?.noseStyle?.value
                        ? errors.noseStyle.value.message
                        : " "
                    }
                    options={defaultOptions.noseStyle}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Mouth Style:"
                    name="mouthStyle"
                    control={control}
                    register={register}
                    data="mouthStyle"
                    errors={
                      errors?.mouthStyle?.value
                        ? errors.mouthStyle.value.message
                        : " "
                    }
                    options={defaultOptions.mouthStyle}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Shirt Style:"
                    name="shirtStyle"
                    control={control}
                    register={register}
                    data="shirtStyle"
                    errors={
                      errors?.shirtStyle?.value
                        ? errors.shirtStyle.value.message
                        : " "
                    }
                    options={defaultOptions.shirtStyle}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Glasses Style:"
                    name="glassesStyle"
                    control={control}
                    register={register}
                    data="glassesStyle"
                    errors={
                      errors?.glassesStyle?.value
                        ? errors.glassesStyle.value.message
                        : " "
                    }
                    options={defaultOptions.glassesStyle}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Hair Color:"
                    name="hairColor"
                    control={control}
                    register={register}
                    data="hairColor"
                    errors={
                      errors?.hairColor?.value
                        ? errors.hairColor.value.message
                        : " "
                    }
                    options={defaultOptions.hairColor}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Hair Style:"
                    name="hairStyle"
                    control={control}
                    register={register}
                    data="hairStyle"
                    errors={
                      errors?.hairStyle?.value
                        ? errors.hairStyle.value.message
                        : " "
                    }
                    options={
                      gender === "man"
                        ? defaultOptions.hairStyleMan
                        : defaultOptions.hairStyleWoman
                    }
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Hat Style:"
                    name="hatStyle"
                    control={control}
                    register={register}
                    data="hatStyle"
                    errors={
                      errors?.hatStyle?.value
                        ? errors.hatStyle.value.message
                        : " "
                    }
                    options={defaultOptions.hatStyle}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Hat Color:"
                    name="hatColor"
                    control={control}
                    register={register}
                    data="hatColor"
                    errors={
                      errors?.hatColor?.value
                        ? errors.hatColor.value.message
                        : " "
                    }
                    options={defaultOptions.hatColor}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Eyebrow Style:"
                    name="eyeBrowStyle"
                    control={control}
                    register={register}
                    data="eyeBrowStyle"
                    errors={
                      errors?.eyeBrowStyle?.value
                        ? errors.eyeBrowStyle.value.message
                        : " "
                    }
                    options={defaultOptions.eyeBrowStyle}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Shirt Color:"
                    name="shirtColor"
                    control={control}
                    register={register}
                    data="shirtColor"
                    errors={
                      errors?.shirtColor?.value
                        ? errors.shirtColor.value.message
                        : " "
                    }
                    options={defaultOptions.shirtColor}
                  />
                </ContInput>
                <ContInput>
                  <InputSelect
                    label="Background Color:"
                    name="bgColor"
                    control={control}
                    register={register}
                    data="bgColor"
                    errors={
                      errors?.bgColor?.value
                        ? errors.bgColor.value.message
                        : " "
                    }
                    options={defaultOptions.bgColor}
                  />
                </ContInput>
              </ContInputs>
              <ButtonSub type="submit">Generate</ButtonSub>
            </ContManConfig>
            <ContRandom>
              <NewAvatar {...config} />
              <ButtonSub onClick={() => setNewRandomConfig(defaultOptions)}>
                Generate Random
              </ButtonSub>
              <ButtonSub>Save</ButtonSub>
            </ContRandom>
          </ContForm>
        </ContainerModal>
      </Modal>
    </div>
  );
};

export default ModalAvatar;

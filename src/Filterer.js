import React from "react";
import styled from 'styled-components'
import {useForm} from "react-hook-form";
import ErrorMessage from "./errorMessage";
import Header from './Header.js'
import {getStore} from './store.js'
import { useHistory } from "react-router-dom";
import {saveGroup} from './store.js'
const TitleText = styled.p`
    font-size: 40px;
    margin: 0px;
    font-family: "Cabin", sans-serif;
    font-weight: 700;
    border-bottom: 1px solid black;
    margin-top: 20px;
`
const InfoTextM = styled.div`
    font-size: 25px;
    font-family: "Cabin", sans-serif;
    margin-top: 20px;
`
const InputBox = styled.input`
  font-family: "Cabin", sans-serif;
  width: 40vw;
  border-radius: 4px;
  border: 1px solid #201e50;
  padding: 10px 15px;
  font-size: 14px;
  margin-top: 10px;
`
const Container = styled.div`
  margin-bottom: 20px;
`

function Filterer(props) {

  let addVibes = ['Socializing', 'Focused', 'Chill'];
  let theVibes = getStore().map(group => group.vibes);
  let idN = 1;
  theVibes = [...new Set([...addVibes, ...theVibes])];
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = useForm();
  const onSubmit = data => {
    data.amount = 1;
    var a = saveGroup(data);
    let path = `/room/` + a + "/";
    history.push(path);
  };
  return (
    <Container>
      <Header home join></Header>
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <TitleText>Create Room</TitleText>
      <InfoTextM>Name</InfoTextM>
      <InputBox name="host" ref={register({ required: true })} />
      <ErrorMessage error={errors.host} />

      <InfoTextM>What do you want to study?</InfoTextM>
      <InputBox name = "title" ref={register({ required: true })}/>
      <ErrorMessage error={errors.title} />

      <InfoTextM>What are the vibes?</InfoTextM>
      <InputBox name="vibes" list = "vibelist" ref={register({ required: true})} />
      <datalist id = "vibelist">
        {theVibes.map(vibe => (
          <option key = {idN++}>{vibe}</option>
        ))}
      </datalist>
      <ErrorMessage error={errors.vibes} />

      <InfoTextM>Max Amount of People</InfoTextM>
      <InputBox name="max" type="number" ref={register({ required: true, max: 10, min: 2 })}  />
      <ErrorMessage error={errors.max } />

      <InfoTextM>Goals?</InfoTextM>
      <InputBox name="goals" ref={register({required: true})} />
      <ErrorMessage error={errors.goals } />
      <InfoTextM>Zoom Link?</InfoTextM>
      <InputBox name="zoomlink" ref={register({required: true})} />
      <ErrorMessage error={errors.zoomlink } />
      <InputBox disabled={isSubmitting} type="submit" />
    </form>
    </Container>
  );
}
export default Filterer;

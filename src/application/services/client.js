import { requestBackend, getHeaders } from '../api';

const entity = 'client';

export const getClientById = async (id) => {
  return (await requestBackend.get(`/${entity}/${id}`, await getHeaders())).data;
}

export const contactClient = async (id, body) => {
  return (await requestBackend.post(`/${entity}/contact/${id}`, body, await getHeaders())).data;
}
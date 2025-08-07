import { useMutation } from '@tanstack/react-query';
import { loginApi, recoverPasswordApi, registeApi } from '../service/useService';

export const useLogin = () => {
  return useMutation({
    mutationFn: loginApi
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registeApi
  })
}

export const useRecoverPassword = () => {
  return useMutation({
    mutationFn: recoverPasswordApi,
    retry: 1,
    retryDelay: () => 5000,
  })
}

export const useRetryEmail = () => {
  return useMutation({
    mutationFn: ({ email }) => recoverPasswordApi({ email }),
  });
};

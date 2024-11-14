import { useState } from 'react';
import { validateCellphone, validateDocumentNumber } from '../utils/validation';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPaymentResponsible } from '../redux/userSlice';

type FormInfo = {
  document_type: {
    value: string;
    isValid: boolean;
  };
  document_number: {
    value: string;
    isValid: boolean;
  };
  cellphone: {
    value: string;
    isValid: boolean;
  };
  privacy_policies: {
    accepted: boolean;
  };
  communication_policies: {
    accepted: boolean;
  };
};

export const useForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState<FormInfo>({
    document_type: {
      value: 'dni',
      isValid: true,
    },
    document_number: {
      value: '',
      isValid: true,
    },
    cellphone: {
      value: '',
      isValid: true,
    },
    privacy_policies: {
      accepted: false,
    },
    communication_policies: {
      accepted: false,
    },
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectOptions = [
    { value: 'dni', text: 'DNI' },
    { value: 'ce', text: 'C.E.' },
  ];

  const validateFormInfo = (name: string, value: string | boolean) => {
    if (name === 'document_type') {
      return true;
    }
    if (name === 'document_number' && typeof value === 'string') {
      return validateDocumentNumber(value);
    }
    if (name === 'cellphone' && typeof value === 'string') {
      return validateCellphone(value);
    }
  };

  const onInputChange = (name: keyof FormInfo, value: string | boolean) => {
    if (typeof value === 'string') {
      setFormInfo(prev => ({
        ...prev,
        [name]: {
          value,
          isValid: validateFormInfo(name, value),
        },
      }));
    } else {
      setFormInfo(prev => ({
        ...prev,
        [name]: {
          accepted: value,
        },
      }));
    }
  };

  const handleSubmitForm = async () => {
    const isValid =
      formInfo.document_type.value !== '' &&
      formInfo.document_type.isValid &&
      formInfo.document_number.value !== '' &&
      formInfo.document_number.isValid &&
      formInfo.cellphone.value !== '' &&
      formInfo.cellphone.isValid;
    const policiesAcepted =
      formInfo.privacy_policies.accepted &&
      formInfo.communication_policies.accepted;

    if (!isValid) {
      setErrorMessage('Datos incompletos o erróneos.');
      return;
    }
    if (!policiesAcepted) {
      setErrorMessage('Debes aceptar las políticas para cotizar.');
      return;
    }

    if (isValid && policiesAcepted) {
      setErrorMessage(null);
      const documentNumber = formInfo.document_number.value;
      const cellphone = formInfo.cellphone.value;
      const data = {
        numberDocument: documentNumber,
        telephone: cellphone,
      }
      dispatch(getPaymentResponsible(data))
      navigate('/PlanesyCoberturas');
      return;
    }
  };

  return {
    selectOptions,
    formInfo,
    onInputChange,
    handleSubmitForm,
    errorMessage,
  };
};

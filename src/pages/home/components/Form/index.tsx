import { Checkbox } from '../../../../components/Checkbox';
import { Input } from '../../../../components/Input';
import { Select } from '../../../../components/Select';
import { useForm } from '../../../../hooks/useForm';
import './styles.scss';

export const Form = () => {

  const {
    formInfo,
    onInputChange,
    handleSubmitForm,
    selectOptions,
    errorMessage,
  } = useForm();

  return (
    <div className="form-container">
      <div className="form-container__document">
        <Select
          variant="right"
          options={selectOptions}
          isValid={formInfo.document_type.isValid}
          onChange={e => onInputChange('document_type', e.target.value)}
        />
        <Input
          variant="left"
          label="Nro. de documento"
          isValid={formInfo.document_number.isValid}
          onChange={e => onInputChange('document_number', e.target.value)}
        />
      </div>
      <Input
        label="Celular"
        isValid={formInfo.cellphone.isValid}
        onChange={e => onInputChange('cellphone', e.target.value)}
      />
      <Checkbox
        text="Acepto la Política de Privacidad"
        type="checkbox"
        checked={formInfo.privacy_policies.accepted}
        onChange={e => onInputChange('privacy_policies', e.target.checked)}
      />
      <Checkbox
        text="Acepto la Política de Comunicaciones Comerciales"
        type="checkbox"
        checked={formInfo.communication_policies.accepted}
        onChange={e =>
          onInputChange('communication_policies', e.target.checked)
        }
      />
      <a href="http://google.com" target="_blank" rel="noopener noreferrer">
        Aplican Términos y Condiciones.
      </a>
      <button onClick={handleSubmitForm}>Cotiza aquí</button>
      {errorMessage && (
        <div className="form-container__error-message">{errorMessage}</div>
      )}
    </div>
  );
};

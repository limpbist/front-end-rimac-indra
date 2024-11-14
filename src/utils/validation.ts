export const validateDocumentNumber = (documentNumber: string) => {
  const regexDocumentNumber = /^\d+$/;
  return regexDocumentNumber.test(documentNumber);
};

export const validateCellphone = (cellphone: string) => {
  const regexCellphone = /^\+?\d+$/;
  return regexCellphone.test(cellphone);
};

export const getAge = (birthdate: string) => {
  var birthday = new Date(birthdate);

  var today = new Date();

  var age = today.getFullYear() - birthday.getFullYear();

  if (
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() < birthday.getDate())
  ) {
    age--;
  }

  return age;
};

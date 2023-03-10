/* VALIDATE EMAIL */
export function validateEmail(email) {
  const regexEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

  return regexEmail.test(email);
}

/* VALIDATE ONLY NUMBERS IN A STRING*/
export function validateOnlyNumbers(numbers) {
  const regexNumbers = new RegExp(/^[0-9]\d{8}$/);

  return regexNumbers.test(numbers);
}

/* VALIDATE DATE ON FORMAT DD-MM-YYYY*/
export function validateDate(date) {
  const regexData = new RegExp(
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
  );

  return regexData.test(date);
}

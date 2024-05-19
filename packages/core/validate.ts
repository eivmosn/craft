export const enum VALID_TYPE {
  EMAIL = 'email',
  NUMBER = 'number',
  PHONE = 'phone',
  INTEGER = 'integer',
  IDCARD = 'idcard',
}

export const vRegExp = {
  email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  number: /^[+-]?\d+(\.\d+)?$/,
  integer: /^[+-]?\d+$/,
  phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
  idcard: /^\d{15}$|^\d{17}(\d|x|X)$/,
}

export interface ValidateOption {
  state: string
  widget: string
}

export async function validate(option: ValidateOption) {
  const { state, widget } = option
  console.log(state, widget)
}

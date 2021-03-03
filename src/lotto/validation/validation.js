import validator from '../../utils/validator.js';
import { MESSAGE } from '../../constants.js';

const guide = {
  getCostCheckResult(cost) {
    if (!validator.isMoneyMoreThanZero(cost)) {
      return MESSAGE.SHOULD_MORE_THAN_ZERO;
    }

    if (!validator.isInteger(cost)) {
      return MESSAGE.SHOULD_BE_INTERGER;
    }

    return '';
  },

  getCorrectNumberCheckResult(correctNumbers) {
    if (validator.isDuplicatedNumberExist(correctNumbers)) {
      return MESSAGE.DUPLICATED_NUMBER_EXIST_MESSAGE;
    }
    if (validator.isNumberOutOfRangeExist(correctNumbers)) {
      return MESSAGE.NUMBER_RANGE_EXCEEDED_MESSAGE;
    }

    return '';
  },

  getModalOpenCheckResult(correctNumbers) {
    if (validator.isEmptyCorrectNumberExist(correctNumbers)) {
      return MESSAGE.SHOULD_INPUT_ALL_NUMBERS_MESSAGE;
    }

    return '';
  },
};

export default guide;
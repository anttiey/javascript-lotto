import Lotto from '../domain/Lotto';
import LottoValidator from '../domain/LottoValidator';

class LottoGame {
  #winningNumbers;

  #bonusNumber;

  createLotto(money) {
    return Array.from({ length: money / 1000 }).map(() => new Lotto([1, 2, 3, 4, 5, 6]));
  }

  createWinningNumbers(numbers) {
    LottoValidator.validateNumbersLength(numbers);
    LottoValidator.validateNumbersDuplicate(numbers);
    LottoValidator.validateNumbersType(numbers);
    LottoValidator.validateNumbersRange(numbers);

    this.#winningNumbers = numbers;
  }

  createBonusNumber(number) {
    LottoValidator.validateNumbersType([number]);
    LottoValidator.validateNumbersRange([number]);
    LottoValidator.validateNumbersDuplicate([...this.#winningNumbers, number]);

    this.#bonusNumber = number;
  }
}

export default LottoGame;

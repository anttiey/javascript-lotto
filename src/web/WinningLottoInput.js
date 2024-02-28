import Component from './Component';

class WinningLottoInput extends Component {
  template() {
    const WINNING_LOTTO_INPUT_TEMPLATE = ` 
      <p>지난 주 당첨번호 6개와 보너스 번호 1개를 입력해주세요.</p>
      <form class="winning-lotto-form">
        <div>
          <fieldset class="winning-number-input">
            <label>당첨 번호</label>
            <div>
              <input class="winning-number" type="text" required></input>
              <input class="winning-number" type="text" required></input>
              <input class="winning-number" type="text" required></input>
              <input class="winning-number" type="text" required></input>
              <input class="winning-number" type="text" required></input>
              <input class="winning-number" type="text" required></input>
            </div>
          </fieldset>
          <fieldset class="bonus-number-input">
            <label>보너스 번호</label>
            <input class="bonus-number" type="text" required></input>
          </fieldset>
        </div>
        <input class="winning-lotto-btn" type="submit" value="결과 확인하기"></input>
      </form>
    `;

    return WINNING_LOTTO_INPUT_TEMPLATE;
  }

  setEvent() {
    this.$target.querySelector('.winning-lotto-form').addEventListener('submit', (event) => this.onFormSubmit(event));
  }

  onFormSubmit(event) {
    event.preventDefault();

    const winningNumbers = [...this.$target.querySelectorAll('.winning-number')].map((el) => el.value);
    const bonusNumber = this.$target.querySelector('.bonus-number').value;

    this.props.makeWinningLotto(winningNumbers, bonusNumber);
    this.resetFormValue();
  }

  resetFormValue() {
    this.$target.querySelectorAll('.winning-number').forEach((el) => (el.value = ''));
    this.$target.querySelector('.bonus-number').value = '';
  }
}

export default WinningLottoInput;

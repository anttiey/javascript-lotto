export default class Lotto {
  constructor() {
    this.tickets = [];
    this.purchasePrice = 0;
  }

  setTickets(ticket) {
    this.tickets.push(ticket);
  }

  addTicket() {
    return this.tickets;
  }

  setPurchasePrice(purchasePrice) {
    this.purchasePrice = purchasePrice;
  }

  initialize() {
    this.tickets = [];
    this.purchasePrice = 0;
  }
}

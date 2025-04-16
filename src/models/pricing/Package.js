export class Package {
  constructor({
    id,
    name,
    description,
    rateCardId,
    addOns = [],
    duration,
    price,
    isRecurring = false,
    renewalDiscount = 0,
    maxRenewals,
    isActive = true,
    createdAt = new Date(),
    updatedAt = new Date()
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rateCardId = rateCardId;
    this.addOns = addOns;
    this.duration = duration;
    this.price = price;
    this.isRecurring = isRecurring;
    this.renewalDiscount = renewalDiscount;
    this.maxRenewals = maxRenewals;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  calculateTotalPrice(quantity = 1) {
    return this.price * quantity;
  }

  calculateRenewalPrice() {
    if (!this.isRecurring) return null;
    return this.price * (1 - this.renewalDiscount / 100);
  }

  canRenew(currentRenewals = 0) {
    if (!this.isRecurring) return false;
    if (!this.maxRenewals) return true;
    return currentRenewals < this.maxRenewals;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      rateCardId: this.rateCardId,
      addOns: this.addOns,
      duration: this.duration,
      price: this.price,
      isRecurring: this.isRecurring,
      renewalDiscount: this.renewalDiscount,
      maxRenewals: this.maxRenewals,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
} 
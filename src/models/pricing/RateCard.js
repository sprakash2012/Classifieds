export class RateCard {
  constructor({
    id,
    name,
    description,
    basePrice,
    duration,
    category,
    type,
    includedAddOns = [],
    imageLimit,
    renewalFee,
    taxRate,
    isActive = true,
    createdAt = new Date(),
    updatedAt = new Date()
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.basePrice = basePrice;
    this.duration = duration;
    this.category = category;
    this.type = type;
    this.includedAddOns = includedAddOns;
    this.imageLimit = imageLimit;
    this.renewalFee = renewalFee;
    this.taxRate = taxRate;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  calculatePrice(quantity = 1) {
    return this.basePrice * quantity;
  }

  calculateRenewalPrice() {
    return this.renewalFee || this.basePrice;
  }

  calculateTax(price) {
    return price * (this.taxRate / 100);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      basePrice: this.basePrice,
      duration: this.duration,
      category: this.category,
      type: this.type,
      includedAddOns: this.includedAddOns,
      imageLimit: this.imageLimit,
      renewalFee: this.renewalFee,
      taxRate: this.taxRate,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
} 
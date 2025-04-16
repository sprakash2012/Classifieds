export class AddOn {
  constructor({
    id,
    name,
    description,
    price,
    duration,
    category,
    type,
    isRecurring = false,
    renewalPrice,
    maxQuantity = 1,
    isActive = true,
    createdAt = new Date(),
    updatedAt = new Date()
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.duration = duration;
    this.category = category;
    this.type = type;
    this.isRecurring = isRecurring;
    this.renewalPrice = renewalPrice;
    this.maxQuantity = maxQuantity;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  calculatePrice(quantity = 1) {
    if (quantity > this.maxQuantity) {
      throw new Error(`Maximum quantity of ${this.maxQuantity} exceeded`);
    }
    return this.price * quantity;
  }

  calculateRenewalPrice(quantity = 1) {
    if (!this.isRecurring) return null;
    return (this.renewalPrice || this.price) * quantity;
  }

  isValidQuantity(quantity) {
    return quantity > 0 && quantity <= this.maxQuantity;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      duration: this.duration,
      category: this.category,
      type: this.type,
      isRecurring: this.isRecurring,
      renewalPrice: this.renewalPrice,
      maxQuantity: this.maxQuantity,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
} 
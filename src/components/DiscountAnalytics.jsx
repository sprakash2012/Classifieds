import React, { useState, useEffect } from 'react';
import './DiscountAnalytics.css';

const DiscountAnalytics = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [analytics, setAnalytics] = useState({
    activePromoCodes: [],
    bundlePerformance: [],
    totalDiscounts: {
      amount: 0,
      percentage: 0
    },
    topDiscountedCategories: [],
    topDiscountedClients: []
  });

  // Mock data for demonstration
  useEffect(() => {
    const mockData = {
      activePromoCodes: [
        { code: 'SPRING20', usage: 45, discount: 20, revenue: 15000 },
        { code: 'SUMMER15', usage: 30, discount: 15, revenue: 12000 },
        { code: 'WELCOME10', usage: 25, discount: 10, revenue: 8000 }
      ],
      bundlePerformance: [
        { name: 'Premium Bundle', revenue: 25000, discount: 15 },
        { name: 'Starter Bundle', revenue: 18000, discount: 10 },
        { name: 'Business Bundle', revenue: 32000, discount: 20 }
      ],
      totalDiscounts: {
        amount: 45000,
        percentage: 12.5
      },
      topDiscountedCategories: [
        { category: 'Real Estate', discount: 25, revenue: 35000 },
        { category: 'Jobs', discount: 20, revenue: 28000 },
        { category: 'Automotive', discount: 15, revenue: 22000 }
      ],
      topDiscountedClients: [
        { name: 'Acme Corp', discount: 30, revenue: 40000 },
        { name: 'Tech Solutions', discount: 25, revenue: 35000 },
        { name: 'Global Industries', discount: 20, revenue: 30000 }
      ]
    };
    setAnalytics(mockData);
  }, [timeRange]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercentage = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(value / 100);
  };

  return (
    <div className="discount-analytics">
      <div className="analytics-header">
        <h2>Discount & Promo Analytics</h2>
        <select 
          value={timeRange} 
          onChange={(e) => setTimeRange(e.target.value)}
          className="time-range-select"
        >
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="quarter">Last 90 Days</option>
        </select>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Discounts Given</h3>
          <p className="metric-value">{formatCurrency(analytics.totalDiscounts.amount)}</p>
          <p className="metric-subtitle">{formatPercentage(analytics.totalDiscounts.percentage)} of Revenue</p>
        </div>
      </div>

      <div className="charts-grid">
        {/* Active Promo Codes */}
        <div className="chart-card">
          <h3>🎟️ Active Promo Codes & Usage</h3>
          <div className="promo-codes">
            {analytics.activePromoCodes.map((promo, index) => (
              <div key={index} className="promo-item">
                <div className="promo-header">
                  <span className="promo-code">{promo.code}</span>
                  <span className="promo-discount">{promo.discount}% off</span>
                </div>
                <div className="promo-details">
                  <span>Usage: {promo.usage}</span>
                  <span>Revenue: {formatCurrency(promo.revenue)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bundle Performance */}
        <div className="chart-card">
          <h3>📦 Bundle Performance Reports</h3>
          <div className="bundle-performance">
            {analytics.bundlePerformance.map((bundle, index) => (
              <div key={index} className="bundle-item">
                <div className="bundle-header">
                  <span className="bundle-name">{bundle.name}</span>
                  <span className="bundle-discount">{bundle.discount}% off</span>
                </div>
                <div className="bundle-revenue">
                  Revenue: {formatCurrency(bundle.revenue)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Discounted Categories */}
        <div className="chart-card">
          <h3>🎯 Top Discounted Categories</h3>
          <div className="category-performance">
            {analytics.topDiscountedCategories.map((category, index) => (
              <div key={index} className="category-item">
                <div className="category-header">
                  <span className="category-name">{category.category}</span>
                  <span className="category-discount">{category.discount}% off</span>
                </div>
                <div className="category-revenue">
                  Revenue: {formatCurrency(category.revenue)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Discounted Clients */}
        <div className="chart-card">
          <h3>🎯 Top Discounted Clients</h3>
          <div className="client-performance">
            {analytics.topDiscountedClients.map((client, index) => (
              <div key={index} className="client-item">
                <div className="client-header">
                  <span className="client-name">{client.name}</span>
                  <span className="client-discount">{client.discount}% off</span>
                </div>
                <div className="client-revenue">
                  Revenue: {formatCurrency(client.revenue)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountAnalytics; 
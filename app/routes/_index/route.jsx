import React from 'react';

export default function AppOverview() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: '1.6'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#202223',
          margin: '0 0 16px 0'
        }}>
          Circular Wealth Tracking
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#6d7175',
          margin: '0'
        }}>
          Circular Wealth Affiliate marketing tracking made simple for Shopify stores
        </p>
      </div>

      {/* What it does */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '32px',
        borderRadius: '12px',
        marginBottom: '32px',
        border: '1px solid #e1e3e5'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#202223',
          margin: '0 0 16px 0'
        }}>
          What does this app do?
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#404145',
          margin: '0 0 16px 0'
        }}>
          Circular Wealth Tracking automatically monitors affiliate-driven conversions on your Shopify store. 
          When a customer clicks an affiliate link and completes a purchase, the app captures the order data 
          and sends it to the <strong>Circular Wealth</strong> platform for accurate commission processing.
        </p>
      </div>

      {/* Simple process */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#202223',
          margin: '0 0 24px 0',
          textAlign: 'center'
        }}>
          How it works — in 3 simple steps
        </h3>
        
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {[{
            step: '1',
            title: 'Customer Clicks Link',
            desc: 'A shopper clicks an affiliate link containing a unique tracking ID.'
          }, {
            step: '2',
            title: 'App Tracks Purchase',
            desc: 'The app detects when the shopper completes their order.'
          }, {
            step: '3',
            title: 'Commission Processed',
            desc: 'Relevant order details (such as order amount and discount code used) are securely sent to Circular Wealth for accurate attribution.'
          }].map((item, idx) => (
            <div key={idx} style={{
              flex: '1',
              minWidth: '200px',
              textAlign: 'center',
              padding: '24px',
              backgroundColor: '#ffffff',
              border: '1px solid #e1e3e5',
              borderRadius: '8px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#005bd3',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                {item.step}
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '14px', color: '#6d7175', margin: '0' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key features */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #e1e3e5',
        marginBottom: '32px'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#202223',
          margin: '0 0 20px 0'
        }}>
          Key Features
        </h3>
        
        <div style={{ display: 'grid', gap: '16px' }}>
          {[
            { icon: '🔄', text: <><strong>Automatic Tracking:</strong> Fully automated—no manual tagging or tracking setup required.</> },
            { icon: '🎯', text: <><strong>Circular Wealth Integration:</strong> Built to connect directly with the <strong>Circular Wealth</strong> platform for seamless affiliate commission management.</> },
            { icon: '⚡', text: <><strong>Real-Time Processing:</strong> Order tracking and data syncing happen instantly.</> },
            { icon: '🛡️', text: <><strong>Secure & Reliable:</strong> Enterprise-grade tracking with high accuracy and robust attribution logic.</> }
          ].map((feature, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontSize: '18px' }}>{feature.icon}</span>
              <div>{feature.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Setup note */}
      <div style={{
        backgroundColor: '#fff4e6',
        padding: '24px',
        borderRadius: '8px',
        border: '1px solid #ffd580',
        textAlign: 'center'
      }}>
        <h4 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#b45309',
          margin: '0 0 8px 0'
        }}>
          Setup Required
        </h4>
        <p style={{
          fontSize: '14px',
          color: '#92400e',
          margin: '0 0 16px 0'
        }}>
          Enable the theme extension in your Shopify theme settings to activate tracking
        </p>
        <div style={{ 
          fontSize: '12px', 
          color: '#6d7175', 
          marginTop: '8px',
          fontStyle: 'italic'
        }}>
          In the theme editor:
          <br />
          1. Click "Add app block" or look in the left sidebar
          <br />
          2. Find "Circular Wealth Tracking" 
          <br />
          3. Add it to your theme where you want tracking to occur
        </div>
      </div>
    </div>
  );
}

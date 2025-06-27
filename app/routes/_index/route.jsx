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
          Affiliate marketing tracking made simple for Shopify stores
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
          This Shopify app automatically tracks affiliate marketing conversions by monitoring when customers 
          make purchases after clicking affiliate links. It captures order data and sends it to the TUNE 
          platform for commission processing.
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
          How it works in 3 steps
        </h3>
        
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{
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
              1
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0' }}>
              Customer Clicks Link
            </h4>
            <p style={{ fontSize: '14px', color: '#6d7175', margin: '0' }}>
              Customer clicks affiliate link with tracking ID
            </p>
          </div>

          <div style={{
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
              2
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0' }}>
              App Tracks Purchase
            </h4>
            <p style={{ fontSize: '14px', color: '#6d7175', margin: '0' }}>
              App detects when they complete a purchase
            </p>
          </div>

          <div style={{
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
              3
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0' }}>
              Commission Processed
            </h4>
            <p style={{ fontSize: '14px', color: '#6d7175', margin: '0' }}>
              Data sent to TUNE for affiliate payout
            </p>
          </div>
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
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span style={{ fontSize: '18px' }}>🔄</span>
            <div>
              <strong>Automatic Tracking:</strong> No manual work required - everything happens automatically
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span style={{ fontSize: '18px' }}>🎯</span>
            <div>
              <strong>TUNE Integration:</strong> Seamlessly connects with TUNE platform for commission management
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span style={{ fontSize: '18px' }}>⚡</span>
            <div>
              <strong>Real-time Processing:</strong> Orders are tracked and processed immediately
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span style={{ fontSize: '18px' }}>🛡️</span>
            <div>
              <strong>Secure & Reliable:</strong> Enterprise-grade tracking with precise attribution
            </div>
          </div>
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
          margin: '0'
        }}>
          Remember to enable the theme extension in your Shopify theme settings to activate tracking
        </p>
      </div>
    </div>
  );
}
// app/routes/app.proxy.jsx
import { json } from "@remix-run/node";

export async function loader() {
  
  return json({ message: "HELLO FROM LOADER" }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  });
}

export async function action() {
  
  try {
    // Your external API call
    const response = await fetch('https://cms.circularwealth.com/api/shopify/store-transaction-id', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    const data = await response.json();
    
    return json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
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
  
  return json({ message: "HELLO FROM ACTIONS" }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  });

  try {
    // Your external API call
    const response = await fetch('https://cms.circularwealth.com/api/your-endpoint', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any auth headers needed for your CMS
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
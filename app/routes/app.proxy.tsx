import { type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return new Response("Proxy2", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const body = await request.json();
    const { endpoint, ...data } = body;
    
    let apiUrl;
    switch (endpoint) {
      case 'store':
        apiUrl = 'https://cms.circularwealth.com/api/shopify/store-transaction-id';
        break;
      default:
        console.log('Invalid endpoint received:', endpoint);
        return { success: false, error: 'Invalid endpoint' };
    }
    
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    return { success: true };
    
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error" 
    };
  }
};
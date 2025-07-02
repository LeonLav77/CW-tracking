function setCookie(name, value, days = 7) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 86400000)); // 86400000 ms = 1 day
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    
    for (const cookie of cookies) {
        const trimmed = cookie.trim();
        if (trimmed.startsWith(nameEQ)) {
            return decodeURIComponent(trimmed.substring(nameEQ.length));
        }
    }

    return null;
}

function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error('Failed to set localStorage:', error);
    }
}

function getLocalStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.error('Failed to get localStorage:', error);
        return null;
    }
}

function getTransactionId() {
    const urlParams = new URLSearchParams(window.location.search);
    let transactionId = urlParams.get('transaction_id');

    if (transactionId) {
        setCookie('transaction_id', transactionId);
        setLocalStorage('transaction_id', transactionId);
        return transactionId;
    }

    transactionId = getLocalStorage('transaction_id') || getCookie('transaction_id');
    
    if (transactionId) {
        console.log('Transaction ID from storage:', transactionId);
    }

    return transactionId;
}

async function updateCart(transactionId) {
    try {
        await fetch('/cart.js');
        
        const response = await fetch('/cart/update.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                attributes: { transaction_id: transactionId }
            })
        });

        if (response.ok) {
            console.log('Cart updated with transaction ID');
        }
    } catch (error) {
        console.error('Failed to update cart:', error);
    }
}

function addToForms(transactionId) {
    const forms = document.querySelectorAll('form[action^="/cart/add"]');

    forms.forEach(form => {
        const inputName = 'properties[transaction_id]';
        
        if (!form.querySelector(`input[name="${inputName}"]`)) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = inputName;
            input.value = transactionId;
            form.appendChild(input);
        }
    });
}

function watchForNewForms(transactionId) {
    if (typeof MutationObserver === 'undefined') return;

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const newForms = node.matches?.('form[action^="/cart/add"]') 
                        ? [node] 
                        : node.querySelectorAll?.('form[action^="/cart/add"]') || [];
                    
                    newForms.forEach(form => addToForms(transactionId));
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

function initTransactionId() {
    const transactionId = getTransactionId();
    
    if (transactionId) {
        console.log(sendTransactionIdToServer(transactionId));

        updateCart(transactionId);
        addToForms(transactionId);
        watchForNewForms(transactionId);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTransactionId);
} else {
    initTransactionId();
}

async function sendTransactionIdToServer(transactionId) {

    this.fetchData();
    return;

    console.log('Sending transaction ID to server:', transactionId);
    const response = await fetch('https://local-circular-tracking-test.vercel.app/app/proxy', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
    
        },
        body: JSON.stringify({
            endpoint: 'store',
            attributes: { transaction_id: transactionId }
        })
    });
    
    return response.json();
}

async function fetchData() {
  try {
    // This will hit your proxy endpoint
    const response = await fetch('/apps/api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
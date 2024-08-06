class MyService {
  constructor(config) {
    // Retrieve sandpiperUrl from config or use the default value
    this.sandpiperUrl = config.get('sandpiperUrl') || 'https://makerchip.com/function/sandpiper-faas';
  }

  async performSomeAction() {
    // Example method that uses sandpiperUrl
    try {
      const response = await fetch(this.sandpiperUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error performing some action:', error);
      throw error;
    }
  }
}

// Usage example:
const config = {
  get: (key) => {
    // Example config retrieval logic
    const configs = {
      sandpiperUrl: 'https://custom-url.com/api',
    };
    return configs[key];
  },
};

const myService = new MyService(config);

myService.performSomeAction().then(data => {
  console.log(data);
}).catch(error => {
  console.error('Failed to perform some action', error);
});

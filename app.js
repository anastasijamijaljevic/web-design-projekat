const { createApp } = Vue

  createApp({
    data() {
      return {
        ime1: 'Janko Jankovic', 
        Aktivna: false, 
      }
    }, 
    
  }).mount('#app')
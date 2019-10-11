// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

const DocumentAPI = {
    documents: [
      { id: 1, source: "New York Times", topic: "Climate", author: "Marcus", published_at: "15 mins", img: "https://via.placeholder.com/250", title: "This is a catchy headline", descritption: "This is a basic description", url: "https://www.nytimes.com", content: "This is all the juicy content", bias: "https://via.placeholder.com/50", sentiment: "https://via.placeholder.com/50", emotion: "https://via.placeholder.com/50",},
      { id: 1, source: "New York Times", topic: "Climate", author: "Marcus", published_at: "15 mins", img: "https://via.placeholder.com/250", title: "This is a catchy headline", descritption: "This is a basic description", url: "https://www.nytimes.com", content: "This is all the juicy content", bias: "https://via.placeholder.com/50", sentiment: "https://via.placeholder.com/50", emotion: "https://via.placeholder.com/50",},
      { id: 1, source: "New York Times", topic: "Climate", author: "Marcus", published_at: "15 mins", img: "https://via.placeholder.com/250", title: "This is a catchy headline", descritption: "This is a basic description", url: "https://www.nytimes.com", content: "This is all the juicy content", bias: "https://via.placeholder.com/50", sentiment: "https://via.placeholder.com/50", emotion: "https://via.placeholder.com/50",},
      { id: 1, source: "New York Times", topic: "Climate", author: "Marcus", published_at: "15 mins", img: "https://via.placeholder.com/250", title: "This is a catchy headline", descritption: "This is a basic description", url: "https://www.nytimes.com", content: "This is all the juicy content", bias: "https://via.placeholder.com/50", sentiment: "https://via.placeholder.com/50", emotion: "https://via.placeholder.com/50",},
      { id: 1, source: "New York Times", topic: "Climate", author: "Marcus", published_at: "15 mins", img: "https://via.placeholder.com/250", title: "This is a catchy headline", descritption: "This is a basic description", url: "https://www.nytimes.com", content: "This is all the juicy content", bias: "https://via.placeholder.com/50", sentiment: "https://via.placeholder.com/50", emotion: "https://via.placeholder.com/50",},
      { id: 1, source: "New York Times", topic: "Climate", author: "Marcus", published_at: "15 mins", img: "https://via.placeholder.com/250", title: "This is a catchy headline", descritption: "This is a basic description", url: "https://www.nytimes.com", content: "This is all the juicy content", bias: "https://via.placeholder.com/50", sentiment: "https://via.placeholder.com/50", emotion: "https://via.placeholder.com/50",},
    ],
    all: function() { return this.documents},
    get: function(id) {
      const isDocument = d => d.number === id
      return this.players.find(isDocument)
    }
  }
  
  export default DocumentAPI
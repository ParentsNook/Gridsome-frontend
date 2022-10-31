// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection('Nook')
    
    const { data } = await axios.get(`http://localhost:1337/api/Nooks`)

    

    

    
  for (const value of data["data"]) {
    //if (key=="data"){
      //value=data[key]
      // console.log ("adding data")
      // console.log (value)
      console.log(value),
      console.log ((value["attributes"])["Name"])
      collection.addNode({
        
  
        id: value.id,
      
        Name: (value["attributes"])["Name"],
        
        Description: (value["attributes"])["Description"],
        Category:(value["attributes"])["Category"] 
      })
    //}
  }

    actions.addSchemaTypes(`
    type Nook implements Node {
      id: ID!,
      Name: String,
      Description: String, 
      Category:String
    }
   
`)

  })


}
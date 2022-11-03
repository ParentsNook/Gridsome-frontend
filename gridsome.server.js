// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection('Nook')
    
    //const { data } = await axios.get(`http://localhost:1337/api/Nooks`)

    const { data } = await axios.get(`http://localhost:1337/api/nooks/?populate=*`) 

    

    
  for (const value of data["data"]) {
    //if (key=="data"){
      //value=data[key]
      // console.log ("adding data")
      // console.log (value)
      console.log(value),
      console.log ((value["attributes"])["Name"])
      ctgrs = value["attributes"]["categories"]["data"]

      console.log("print catgr ##########")
      
      console.log(ctgrs[0]["attributes"]["Name"])
     
      console.log("print catgr done##########")
      collection.addNode({
        
  
        id: value.id,
      
        Name: (value["attributes"])["Name"],
        
        Description: (value["attributes"])["Description"],
        Categories:ctgrs[0]["attributes"]["Name"] 
      })
    //}
  }

    actions.addSchemaTypes(`
    type Nook implements Node {
      id: ID!,
      Name: String,
      Description: String, 
     Categories: String
    }
   
`)

  })


}
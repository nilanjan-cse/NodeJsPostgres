
const { Pool  } = require('pg');
 
const client = new Pool ({
  user: 'postgres',
  password: 'av]~at:$8H4KA+Ls{]fSg>V*bz-E',
  host: 'test-postgres-db.crawi8kkg7kp.ap-south-1.rds.amazonaws.com',
  port: 5432,
  database: 'postgres',
 ssl: { rejectUnauthorized: false }
});

// (async ()=>{
 
//   const insertQuery = `insert into "UserInfo"."UserCreds" values(default,'admin','admin@ascendion.com','admin','9979599999')`;
//   const getQuery = `select * from "UserInfo"."UserCreds"`;

//   // await GetData(getQuery);
//   await InsertData(insertQuery);

// })()


async function InsertData(query){
  
  await client.connect()
  const result = await client.query(query);
  if(result.rowCount>0){
    return true;
  }
  else{
    console.log("Data insertion failed.");
  }
  await client.end()
}

async function GetData(query)
{
  await client.connect()
  const result = await client.query(query);
  if(result.rowCount>0){
    return result.rows;
  }
  else{
    console.log("Data insertion failed.");
  }
  await client.end()
  
}

module.exports.GetData = (query)=>GetData(query)
module.exports.InsertData = (query)=>InsertData(query);

// client.connect() .then(() => { console.log('Connected to PostgreSQL database!'); }) .catch((err) => { console.error('Error connecting to the database:', err); });
var options=
{
    client:'mysql',
    connection:
    {
        host:"localhost",
        user:"root",
        password:"charispursuj7",
        database:"eamcet"
    }
};
module.exports=require('knex')(options);
/**
 * Created by xin on 2015/12/24.
 */
var dbconfig = {
    //mongoDb
    db: process.env.MONGODB || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test1'
}
module.exports =dbconfig ;

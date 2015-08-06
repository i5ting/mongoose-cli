# mongoose-cli


## Install 

```
[sudo] npm install -g mongoose-cli
```


## Usage


第一步：使用`mongoose`命令来初始化测试目录结构


```
➜  d  mongoose
➜  d  cd mongoose-console 
➜  mongoose-console  ls
LICENSE      README.md    app          config       db.js        example.js   index.js     node_modules package.json
                                                                                
                                                                                
                                                                                                                                                     ➜  mongoose-console  mc
```


第二步： 执行mc命令，在[moa-console](https://github.com/moajs/moa-console)中测试

```
➜  mongoose-console  mc
提醒:debug状态连接数据库:
mongodb://127.0.0.1:27017/mongoose-console-test

[2015-08-06 20:59:47.378] [INFO] [default] - undefined

[2015-08-06 20:59:47.379] [INFO] [default] - Welcome to the Moa console.
[2015-08-06 20:59:47.380] [INFO] [default] - undefined

Available Entity: 
  - Bson
  - Index
Moa> [mongoose log] Successfully connected to:  NaN
mongoose open success

undefined
Moa> .list
Available Entity: 
  - Bson
  - Index
Moa> Bson.find({},function(err,doc){console.log(doc)})
Moa> [ { _id: 55c35575b92da9b4fbeb3b26,
    user_name: 'alfred sang',
    __v: 0,
    created_at: Thu Aug 06 2015 20:39:17 GMT+0800 (CST) },
  { _id: 55c356f4d1b21737ffefb2d4,
    user_name: 'alfred sang',
    __v: 0,
    created_at: Thu Aug 06 2015 20:45:40 GMT+0800 (CST) },
  { _id: 55c356fb12e6f243ffb2c4dd,
    user_name: 'alfred sang',
    __v: 0,
    created_at: Thu Aug 06 2015 20:45:47 GMT+0800 (CST) },
  { _id: 55c35a3fa6474371030783a3,
    user_name: 'alfred sang',
    __v: 0,
    created_at: Thu Aug 06 2015 20:59:43 GMT+0800 (CST) } ]

(^C again to quit)
Moa> 
```


## example

```
➜  mongoose-console  node example.js 
提醒:debug状态连接数据库:
mongodb://127.0.0.1:27017/mongoose-console-test
[mongoose log] Successfully connected to:  NaN
mongoose open success
{ __v: 0,
  user_name: 'alfred sang',
  _id: 55c35a3fa6474371030783a3,
  created_at: Thu Aug 06 2015 20:59:43 GMT+0800 (CST) }
^C%        

```
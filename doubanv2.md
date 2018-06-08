#host 配置
192.168.199.235 my.douban.com



## 首页
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.douban.com/index.php/Api/index/index  `

**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |


 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
        "banner" : [
           {
              "id" : 10,
              "img" : "",
              "title" : "",
              "url" : "",
           },
        ],
        "goods" : [
            {
                "id" : 1,
                "title" : "",
                "image" : "",
                "desc" : "",
                "price" : "",
                "tag":"",
            }
        ],
     }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |
|banner  |array    |广告头图  |
|goods  |array    |商品列表  |



***







## 详情页
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.blog.com/index.php/Api/goods/info`
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |int |商品id|

 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
        "info" : 
            {
                "id" : 1,
                "title" : "",
                "price" : "",
                "desc" : "",
                "image" : "",
                "images": [
                	"",
                ]
            },
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |
|info  |obj    |商品详情  |



***


## 登录
**简要描述：** 

- 登录接口

**请求URL：** 
- ` http://my.blog.com/index.php/Api/user/dologin`
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|phone |是  |string |手机号|
|password |是  |string |密码|

 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
        "info" : 
            {
                "id" : 1,
                "name" : "",
                "phone" : "",
            },
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |




***


## 注册
**简要描述：** 

- 注册接口

**请求URL：** 
- ` http://my.blog.com/index.php/Api/user/doreg`
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|phone |是  |string |手机号|
|password |是  |string |密码|
|name |是  |string |昵称|

 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |




***


## 加入购物车
**简要描述：** 

- 加入购物车

**请求URL：** 
- ` http://my.blog.com/index.php/Api/cart/addcart`
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|goods_id |是  |string |商品id|
|goods_num |是  |string |商品数量|


 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |




***


## 购物车列表
**简要描述：** 

- 购物车列表

**请求URL：** 
- ` http://my.blog.com/index.php/Api/cart/cartlist`
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|goods_id |是  |string |商品id|
|goods_num |是  |string |商品数量|


 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
    	"carts" : [
    		{
    			"id" :1,
    			"goods_id" : 1,
    			"goods_title" : "",
    			"goods_num" : 1,
    			"goods_image" : "",
    			"goods_price" : "",
    		}
    	]
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |




***


## 修改购物车数量
**简要描述：** 

- 修改购物车数量

**请求URL：** 
- ` http://my.blog.com/index.php/Api/cart/edit`
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |string |购物车id|
|is_add |是  |string |1：加     2： 减|


 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |




***

## 删除购物车
**简要描述：** 

- 修改购物车数量

**请求URL：** 
- ` http://my.blog.com/index.php/Api/cart/del`
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |string |购物车id|


 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |




***


## 临时订单
**简要描述：** 

- 临时订单

**请求URL：** 
- ` http://my.blog.com/index.php/Api/order/ordertmp`
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|goods_id |是  |string |商品id|
|goods_num |是  |string |商品数量|
|cartid |是  |array |购物车id "[1,3,5]"|


 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
    	"oid" : "123",
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |




***


## 确认订单
**简要描述：** 

- 确认订单
**请求URL：** 
- ` http://my.blog.com/index.php/Api/order/confirm`
  
**请求方式：**
- get

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|oid |是  |string |临时订单id|



 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
    	"goods_lists" : [
    		{
                "id" : 1,
                "title" : "",
                "image" : "",
                "desc" : "",
                "price" : "",
                "tag":"",
                "num" : "",
            }
    	],
    	"address" : [
    		{
    			"id" : 1，
    			"name" : "",
    			"phone" :"",
    			"address" : "",
    		}
    	],
    	"paytype" : [
    		{
    			"id" : 1,
    			"name" : "余额支付",
    			"icon" : "",
    		}
    	]
     }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |




***


## 下单接口
**简要描述：** 

- 下单接口
**请求URL：** 
- ` http://my.douban.com/index.php/Api/order/create`
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|oid |是  |string |临时订单id|
|aid |是  |string |地址id|
|pid |是  |string |支付id|



 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |





***


## 新建收货地址
**简要描述：** 

- 新建收货地址
**请求URL：** 
- ` http://my.douban.com/index.php/Api/adderss/add`
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|name |是  |string |收货人|
|phone |是  |string |电话号|
|address |是  |string |地址|



 **返回示例**

``` 
  {
    "error_no": 0,
    "message": "success",
    "data": {
    	"info" : {
    		"id" : 1，
    		"name" : "",
    		"phone" :"",
    		"address" : "",
    	}     
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |














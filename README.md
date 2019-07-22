## day01
主题颜色 #b4282d
## 1、完成底部导航
 1、声明式路由导航
 2、切换样式利用on类名，判断路径与跳转路径是否一致显示样式
## 2、home页面的头部布局
 1、拆成homeHeader两个组件 
 2、nav弹性盒模型
   flex-shrink 0 添加给子元素，此时不会压缩子元素
   1）如何让弹性盒模型被项目撑开
    给弹性盒模型父级添加display：flex属性，让该元素变为弹性盒模型，就可以被子元素撑开（nav导航的时候，使用better-scroll）
 3、nav使用better-scroll
  1）需要让内部滑动的元素要比wrapper的宽度要大
  2）横向滑动需要将内部的元素改为行内元素
 4、swiper使用
  需要引入css样式    
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.css"//若是没有引入，则没有轮播图的样式
  自动轮播：autoplay:true
  给小圆点设置样式：/deep/
 # day02 
  1、私人定制轮播图
  2、拆分限时购组件--LimitedShop组件
    实现复用
  3、提取一个公共的title  
  4、访问同一个路由但是携带不同的参数，如何获取最新的参数
    1）首先监视路由变化
    2）当路由改变之后改变data中的属性
    ```
     watch:{
      '$route': 'fetchData'
    },
    methods:{
      fetchData(){
        this.id = this.$route.query.id*1 
        const category = this.categorys.find(c=>this.id===c.id)
        this.category = category
      }
    }
    ```
  # day 03
    1、对路由进行模糊匹配
    ```
     on:$route.path.indexOf('/category')===0
    ```
    2、识物 general组件

  # day04 登录界面
    1、预解决问题：分类界面路由跳转
       父组件dispatch之后子组件可以直接拿得到
    2、倒计时实现
        1）利用moment库  ---不好用--改用原生
    3、解决ipad适配（lib-flexible插件）     
    ```
    //解决lib-flexible不兼容ipad、ipad pro
    /(iPad|iPhone OS|iPod|iOS)/i.test(navigator.userAgent)&&(head=document.getElementsByTagName('head'),viewport=document.createElement('meta'),viewport.name='viewport',viewport.content='target-densitydpi=device-dpi, width=540px, user-scalable=no',head.length>0&&head[head.length-1].appendChild(viewport));
  
    ```
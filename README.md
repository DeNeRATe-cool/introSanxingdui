# Introduction of Archaeological Museum

> 仓库地址：[introArchaeologicalMuseum](https://github.com/DeNeRATe-cool/introArchaeologicalMuseum)
>
> 网页链接：[website](https://denerate-cool.github.io/introArchaeologicalMuseum/)

## 网页展示

### 首页

![image-20241023135843136](.\local\image-20241023135843136.png)

![81b08e4ec940753e953a920c65ebf34](.\local\81b08e4ec940753e953a920c65ebf34.png)

### 文物保护

![db778dd1060dad7c4b12717edbed507](.\local\db778dd1060dad7c4b12717edbed507.png)

### 文化遗产

![9d2501f3863efab3a68a60d128b140f](.\local\9d2501f3863efab3a68a60d128b140f.png)

#### 世界遗产分布图

![ce2e42860d050b1817024379952844f](.\local\ce2e42860d050b1817024379952844f.png)

### 文物故事

![ab95e7dc076fd54dbabc6908659d9f6](.\local\ab95e7dc076fd54dbabc6908659d9f6.png)

#### 故事展示示例

![c3b939574767af7eefd59621cd006f2](.\local\c3b939574767af7eefd59621cd006f2.png)

## 项目介绍

- **动机**：在暑期参观了开放不久的**北京考古博物馆**，从远处看到的时候就已经深感其魅力，通过参观，更是被其深深吸引，尤其是那些镇馆之宝，如“绿松石龙形器”，展馆内置有彩柱LED渲染的龙在龙形器上飞腾，甚是震撼！借这次走进软件个人作业的机会，想要向大家介绍并推荐北京考古博物馆。

  同时，历史的文化是被我们“挖出来的”，当代的文化还能延续多久呢，因此，不免诱人想到保护人类丰富文化遗产，也就诞生了第二个动机。

## 项目详情

### 整体结构

- 项目网页大致分为4个tab，其树形结构如下

  ```
  main
  |
  ├─首页
  ├─文物保护
  ├─文化遗产
  |  └─世界遗产分布
  └─文物故事
     ├─夏绿松石龙形器
     ├─嵌绿松石兽面纹铜牌饰
     ├─嵌绿松石象牙杯
     └─铜爵
  ```


### 首页

- 页面顶端采用**轮播图 + 缩略图**的结构，展示中国考古博物馆的部分珍贵藏品
- 图片和文字采用滑入的方式进行动态展示
- 背景为博物馆整体照片，作为暗景衬托“古韵金风 文明之光”
- 下方分别陈列并链接到指定页面

### 文物保护

- 从 4 个方面阐释文物保护的重要性

### 文化遗产

- 一张可以链接到另一个网页 [ 世界遗产（中国境内）分布图 ] 的图片
- [ 世界遗产（中国境内）分布图 ] 网页通过提供的token展示分布图，并在js中加入了控件实现**全屏以及定位功能**
- 页面下方提供珍贵藏品图片

### 文物故事

- 展示可链接的 4 个不同的故事网页

### footer

- 展示展馆的基本信息
- 提供建议提交区域